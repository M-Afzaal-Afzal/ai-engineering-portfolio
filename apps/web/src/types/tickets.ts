export type TicketStatus = "Open" | "In Progress" | "Resolved";
export type TicketPriority = "High" | "Medium" | "Low";

export interface Ticket {
  id: string;
  subject: string;
  customer: string;
  customerEmail: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  created: string;
}

export interface CreateTicketPayload {
  subject: string;
  customerEmail: string;
  priority: TicketPriority;
  description: string;
}
