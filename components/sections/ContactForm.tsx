type ContactFormProps = {
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

export function ContactForm({
  fullNameLabel,
  fullNamePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  submitLabel
}: ContactFormProps) {
  return (
    <form id="contact-form" className="enter-fade [animation-delay:80ms] flex h-[485px] w-[500px] max-w-[500px] flex-col gap-[40px] px-[36px]" action="#" method="post">
      <div id="contact-form-fields" className="h-[379px] w-[428px]">
        <div id="contact-form-full-name-group">
          <label className="type-form-label mb-1 block align-middle tracking-[0]" htmlFor="full-name">
            {fullNameLabel}
          </label>
          <input className="field-input" id="full-name" name="full-name" placeholder={fullNamePlaceholder} type="text" />
        </div>

        <div id="contact-form-email-group">
          <label className="type-form-label mb-1 block align-middle tracking-[0]" htmlFor="email">
            {emailLabel}
          </label>
          <input className="field-input" id="email" name="email" placeholder={emailPlaceholder} type="email" />
        </div>

        <div id="contact-form-message-group">
          <label className="type-form-label mb-1 block align-middle tracking-[0]" htmlFor="message">
            {messageLabel}
          </label>
          <textarea className="field-input" id="message" name="message" placeholder={messagePlaceholder} />
        </div>
      </div>

      <button id="contact-form-submit" className="mt-auto self-center" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
