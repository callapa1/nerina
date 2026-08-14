'use client';

import {useRef, useState} from 'react';
import type {FormEvent} from 'react';

type ContactFormProps = {
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  requiredError: string;
  invalidEmail: string;
  success: string;
  error: string;
  subject: string;
};

type FieldName = 'fullName' | 'email' | 'message';

type Errors = Partial<Record<FieldName, string>>;

type Status = 'idle' | 'sending' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formEndpoint = 'https://formsubmit.co/ajax/nerinaberthelot@gmail.com';

export function ContactForm({
  fullNameLabel,
  fullNamePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  submitLabel,
  submittingLabel,
  requiredError,
  invalidEmail,
  success,
  error,
  subject
}: ContactFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs: Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null> = {
    fullName: fullNameRef.current,
    email: emailRef.current,
    message: messageRef.current
  };

  const validate = (): Errors => {
    const nextErrors: Errors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = requiredError;
    }

    if (!email.trim()) {
      nextErrors.email = requiredError;
    } else if (!emailPattern.test(email.trim())) {
      nextErrors.email = invalidEmail;
    }

    if (!message.trim()) {
      nextErrors.message = requiredError;
    }

    return nextErrors;
  };

  const handleChange = (field: FieldName, value: string) => {
    const setter = {fullName: setFullName, email: setEmail, message: setMessage}[field];
    setter(value);

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = {...current};
      delete next[field];
      return next;
    });

    if (status === 'error' || status === 'success') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = (['fullName', 'email', 'message'] as FieldName[]).find((field) => nextErrors[field]);
      const firstRef = firstInvalid ? fieldRefs[firstInvalid] : null;
      firstRef?.focus();
      return;
    }

    setStatus('sending');

    const formData = new FormData();
    formData.append('_subject', subject);
    formData.append('_captcha', 'false');
    formData.append('full-name', fullName.trim());
    formData.append('email', email.trim());
    formData.append('message', message.trim());

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {Accept: 'application/json'},
        body: formData
      });

      const payload = (await response.json().catch(() => null)) as {success?: string} | null;

      if (response.ok && payload?.success === 'true') {
        setStatus('success');
        setFullName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      id="contact-form"
      className="enter-fade flex min-h-[485px] w-[500px] max-w-[500px] flex-col gap-[40px] px-[36px] [animation-delay:80ms]"
      noValidate
      onSubmit={handleSubmit}
    >
      <div id="contact-form-fields" className="min-h-[379px] w-[428px]">
        <div id="contact-form-full-name-group">
          <label className="type-form-label mb-1 block align-middle tracking-[0]" htmlFor="full-name">
            {fullNameLabel}
          </label>
          <input
            ref={fullNameRef}
            className={`field-input ${errors.fullName ? 'field-input-error' : ''}`.trim()}
            id="full-name"
            name="full-name"
            placeholder={fullNamePlaceholder}
            type="text"
            required
            value={fullName}
            onChange={(event) => handleChange('fullName', event.target.value)}
            aria-invalid={errors.fullName ? true : undefined}
            aria-describedby={errors.fullName ? 'full-name-error' : undefined}
          />
          {errors.fullName ? (
            <p id="full-name-error" className="form-error-text">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div id="contact-form-email-group">
          <label className="type-form-label mb-1 block align-middle tracking-[0]" htmlFor="email">
            {emailLabel}
          </label>
          <input
            ref={emailRef}
            className={`field-input ${errors.email ? 'field-input-error' : ''}`.trim()}
            id="email"
            name="email"
            placeholder={emailPlaceholder}
            type="email"
            required
            value={email}
            onChange={(event) => handleChange('email', event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="form-error-text">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div id="contact-form-message-group">
          <label className="type-form-label mb-1 block align-middle tracking-[0]" htmlFor="message">
            {messageLabel}
          </label>
          <textarea
            ref={messageRef}
            className={`field-input ${errors.message ? 'field-input-error' : ''}`.trim()}
            id="message"
            name="message"
            placeholder={messagePlaceholder}
            required
            value={message}
            onChange={(event) => handleChange('message', event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="form-error-text">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button id="contact-form-submit" className="teal-cta-button mt-auto self-center" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? submittingLabel : submitLabel}
      </button>

      {status === 'success' ? (
        <p id="contact-form-success" className="form-success-text enter-fade">
          {success}
        </p>
      ) : null}

      {status === 'error' ? (
        <p id="contact-form-error" className="form-error-text enter-fade">
          {error}
        </p>
      ) : null}
    </form>
  );
}
