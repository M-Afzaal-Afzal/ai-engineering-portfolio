import { type CreateTicketPayload, type Ticket } from "@/types/tickets";

export function formatTicketDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function getNextTicketId(existingTickets: Ticket[]) {
  const ticketNumbers = existingTickets.map((ticket) =>
    Number(ticket.id.replace("TK-", ""))
  );

  return `TK-${Math.max(...ticketNumbers) + 1}`;
}

export function createLocalTicket(
  payload: CreateTicketPayload,
  existingTickets: Ticket[],
  createdAt = new Date()
): Ticket {
  const id = getNextTicketId(existingTickets);

  return {
    id,
    subject: payload.subject,
    customer: payload.customerEmail,
    customerEmail: payload.customerEmail,
    description: payload.description,
    status: "Open",
    priority: payload.priority,
    created: formatTicketDate(createdAt),
  };
}
