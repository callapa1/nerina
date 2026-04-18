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
          <label className="mb-1 block align-middle text-[24px] font-normal leading-[140%] tracking-[0]" htmlFor="full-name">
            {fullNameLabel}
          </label>
          <input className="field-input" id="full-name" name="full-name" placeholder={fullNamePlaceholder} type="text" />
        </div>

        <div id="contact-form-email-group">
          <label className="mb-1 block align-middle text-[24px] font-normal leading-[140%] tracking-[0]" htmlFor="email">
            {emailLabel}
          </label>
          <input className="field-input" id="email" name="email" placeholder={emailPlaceholder} type="email" />
        </div>

        <div id="contact-form-message-group">
          <label className="mb-1 block align-middle text-[24px] font-normal leading-[140%] tracking-[0]" htmlFor="message">
            {messageLabel}
          </label>
          <textarea className="field-input" id="message" name="message" placeholder={messagePlaceholder} />
        </div>
      </div>

      <button id="contact-form-submit" type="submit">
        <div id="contact-form-submit-frame">
          <span>{submitLabel}</span>
        </div>
      </button>
    </form>
  );
}
