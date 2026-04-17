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
    <form className="enter-fade [animation-delay:80ms] space-y-4" action="#" method="post">
      <div>
        <label className="mb-1 block text-3xl" htmlFor="full-name">
          {fullNameLabel}
        </label>
        <input className="field-input" id="full-name" name="full-name" placeholder={fullNamePlaceholder} type="text" />
      </div>

      <div>
        <label className="mb-1 block text-3xl" htmlFor="email">
          {emailLabel}
        </label>
        <input className="field-input" id="email" name="email" placeholder={emailPlaceholder} type="email" />
      </div>

      <div>
        <label className="mb-1 block text-3xl" htmlFor="message">
          {messageLabel}
        </label>
        <textarea className="field-input min-h-52 resize-y" id="message" name="message" placeholder={messagePlaceholder} />
      </div>

      <button className="teal-button mt-3" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
