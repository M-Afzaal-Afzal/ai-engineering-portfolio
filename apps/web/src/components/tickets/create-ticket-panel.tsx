"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { type CreateTicketPayload, type TicketPriority } from "@/types/tickets";

const PRIORITY_OPTIONS: TicketPriority[] = ["Low", "Medium", "High"];

export interface CreateTicketFormValues {
  subject: string;
  customerEmail: string;
  priority: TicketPriority | "";
  description: string;
}

export type CreateTicketValidationErrors = Partial<
  Record<keyof CreateTicketFormValues, string>
>;

interface CreateTicketPanelProps {
  open: boolean;
  onClose: () => void;
  onCreateTicket: (ticket: CreateTicketPayload) => void;
}

const emptyFormValues: CreateTicketFormValues = {
  subject: "",
  customerEmail: "",
  priority: "",
  description: "",
};

function validateCreateTicket(
  values: CreateTicketFormValues
): CreateTicketValidationErrors {
  const errors: CreateTicketValidationErrors = {};
  const subject = values.subject.trim();
  const email = values.customerEmail.trim();
  const description = values.description.trim();

  if (!subject) {
    errors.subject = "Subject is required.";
  } else if (subject.length < 8 || subject.split(/\s+/).length < 2) {
    errors.subject = "Use a clear subject with at least two meaningful words.";
  }

  if (!email) {
    errors.customerEmail = "Customer email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.customerEmail = "Enter a valid email address.";
  }

  if (!values.priority) {
    errors.priority = "Choose a priority.";
  }

  if (!description) {
    errors.description = "Description is required.";
  } else if (description.length < 24 || description.split(/\s+/).length < 5) {
    errors.description = "Add enough detail for an agent to understand the issue.";
  }

  return errors;
}

function hasErrors(errors: CreateTicketValidationErrors) {
  return Object.keys(errors).length > 0;
}

export function CreateTicketPanel({
  open,
  onClose,
  onCreateTicket,
}: CreateTicketPanelProps) {
  const [values, setValues] = useState<CreateTicketFormValues>(emptyFormValues);
  const [errors, setErrors] = useState<CreateTicketValidationErrors>({});
  const subjectRef = useRef<HTMLInputElement>(null);

  const closePanel = useCallback(() => {
    setErrors({});
    setValues(emptyFormValues);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    subjectRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePanel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePanel, open]);

  if (!open) {
    return null;
  }

  const updateValue = <Field extends keyof CreateTicketFormValues>(
    field: Field,
    value: CreateTicketFormValues[Field]
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateCreateTicket(values);
    setErrors(nextErrors);

    if (hasErrors(nextErrors) || values.priority === "") {
      return;
    }

    onCreateTicket({
      subject: values.subject.trim(),
      customerEmail: values.customerEmail.trim().toLowerCase(),
      priority: values.priority,
      description: values.description.trim(),
    });
    closePanel();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/35 backdrop-blur-[1px]"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePanel();
        }
      }}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-ticket-title"
        className="ml-auto flex h-full w-full max-w-xl flex-col border-l border-wire bg-panel shadow-xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-wire px-5 py-5 sm:px-6">
          <div>
            <h2
              id="create-ticket-title"
              className="text-lg font-semibold tracking-tight text-ink"
            >
              Create Ticket
            </h2>
            <p className="mt-1 text-sm leading-6 text-ink-soft">
              Add a local ticket to validate the frontend workflow.
            </p>
          </div>
          <button
            type="button"
            onClick={closePanel}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-wire text-ink-soft transition-colors hover:bg-surface hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close create ticket form"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 3l8 8M11 3l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="ticket-subject"
                className="text-xs font-medium uppercase tracking-wide text-ink-soft"
              >
                Subject
              </label>
              <input
                ref={subjectRef}
                id="ticket-subject"
                value={values.subject}
                onChange={(event) => updateValue("subject", event.target.value)}
                aria-invalid={errors.subject ? "true" : "false"}
                aria-describedby={errors.subject ? "ticket-subject-error" : undefined}
                className="h-10 rounded-md border border-wire bg-panel px-3 text-sm text-ink outline-none placeholder:text-ink-soft focus:border-accent focus:ring-2 focus:ring-accent"
                placeholder="Customer cannot access billing page"
              />
              {errors.subject && (
                <p id="ticket-subject-error" className="text-xs font-medium text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="ticket-customer-email"
                className="text-xs font-medium uppercase tracking-wide text-ink-soft"
              >
                Customer email
              </label>
              <input
                id="ticket-customer-email"
                type="email"
                value={values.customerEmail}
                onChange={(event) => updateValue("customerEmail", event.target.value)}
                aria-invalid={errors.customerEmail ? "true" : "false"}
                aria-describedby={
                  errors.customerEmail ? "ticket-customer-email-error" : undefined
                }
                className="h-10 rounded-md border border-wire bg-panel px-3 text-sm text-ink outline-none placeholder:text-ink-soft focus:border-accent focus:ring-2 focus:ring-accent"
                placeholder="customer@example.com"
              />
              {errors.customerEmail && (
                <p
                  id="ticket-customer-email-error"
                  className="text-xs font-medium text-red-600"
                >
                  {errors.customerEmail}
                </p>
              )}
            </div>

            <fieldset className="flex flex-col gap-2">
              <legend className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                Priority
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {PRIORITY_OPTIONS.map((priority) => {
                  const selected = values.priority === priority;
                  return (
                    <button
                      key={priority}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => updateValue("priority", priority)}
                      className={[
                        "h-10 rounded-md border px-3 text-sm font-medium transition-colors active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        selected
                          ? "border-accent bg-accent text-white"
                          : "border-wire bg-panel text-ink-soft hover:border-accent hover:text-accent",
                      ].join(" ")}
                    >
                      {priority}
                    </button>
                  );
                })}
              </div>
              {errors.priority && (
                <p className="text-xs font-medium text-red-600">{errors.priority}</p>
              )}
            </fieldset>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="ticket-description"
                className="text-xs font-medium uppercase tracking-wide text-ink-soft"
              >
                Description
              </label>
              <textarea
                id="ticket-description"
                value={values.description}
                onChange={(event) => updateValue("description", event.target.value)}
                aria-invalid={errors.description ? "true" : "false"}
                aria-describedby={
                  errors.description ? "ticket-description-error" : undefined
                }
                rows={6}
                className="min-h-32 resize-none rounded-md border border-wire bg-panel px-3 py-2.5 text-sm leading-6 text-ink outline-none placeholder:text-ink-soft focus:border-accent focus:ring-2 focus:ring-accent"
                placeholder="Describe what happened, when it started, affected screens, and any steps already tried."
              />
              {errors.description && (
                <p id="ticket-description-error" className="text-xs font-medium text-red-600">
                  {errors.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-wire px-5 py-4 sm:px-6">
            <Button type="button" variant="outline" onClick={closePanel}>
              Cancel
            </Button>
            <Button type="submit">Create Ticket</Button>
          </div>
        </form>
      </aside>
    </div>
  );
}
