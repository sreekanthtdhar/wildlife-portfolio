import React, {FormEvent, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import {colors} from '../theme/colors';

// Sign up at formspree.io and replace this with your form ID
const FORMSPREE_ID = 'YOUR_FORM_ID';

export function Contact() {
  const {ref, inView} = useInView({triggerOnce: true, rootMargin: '-80px'});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: {Accept: 'application/json'},
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" style={styles.section}>
      <div ref={ref} className={`fade-in${inView ? ' visible' : ''}`} style={styles.inner}>
        <div style={styles.heading}>
          <p style={styles.eyebrow}>Get In Touch</p>
          <h2 style={styles.title}>Contact Me</h2>
          <p style={styles.subtitle}>
            Available for editorial assignments, fine art prints, workshops, and licensing.
          </p>
        </div>

        {status === 'success' ? (
          <div style={styles.successBox}>
            <p style={styles.successText}>Thank you! I'll get back to you within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Name</label>
                <input name="name" required style={styles.input} placeholder="Your name" />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Email</label>
                <input name="email" type="email" required style={styles.input} placeholder="your@email.com" />
              </div>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Subject</label>
              <input name="subject" style={styles.input} placeholder="Print licensing, workshop, editorial..." />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Message</label>
              <textarea name="message" required rows={5} style={{...styles.input, ...styles.textarea}} placeholder="Tell me about your project..." />
            </div>
            {status === 'error' && (
              <p style={styles.errorText}>Something went wrong. Please try again or email directly.</p>
            )}
            <button type="submit" style={styles.submitBtn} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const inputBase: React.CSSProperties = {
  width: '100%',
  background: colors.bgPanel,
  border: `1px solid ${colors.border}`,
  borderRadius: 4,
  color: colors.textPrimary,
  fontSize: 14,
  padding: '12px 16px',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: colors.bg,
    padding: '100px 0',
  },
  inner: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '0 32px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: 56,
  },
  eyebrow: {
    color: colors.accentWarm,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 'clamp(28px, 4vw, 46px)',
    fontWeight: 700,
    marginBottom: 16,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 1.7,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  input: inputBase,
  textarea: {
    resize: 'vertical' as const,
    minHeight: 120,
  },
  submitBtn: {
    background: colors.accentWarm,
    border: 'none',
    borderRadius: 4,
    color: '#1a1a1a',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    padding: '14px 32px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'background 0.2s',
  },
  successBox: {
    background: colors.bgPanel,
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    padding: '40px',
    textAlign: 'center',
  },
  successText: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 13,
  },
};
