"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type TicketStatus = "Open" | "In Progress" | "Resolved";
type TicketPriority = "High" | "Medium" | "Low";

interface Ticket {
  id: string;
  subject: string;
  customer: string;
  status: TicketStatus;
  priority: TicketPriority;
  created: string;
}

const tickets: Ticket[] = [
  { id: "TK-1041", subject: "Cannot export reports to PDF after latest update", customer: "Priya Sharma", status: "Open", priority: "High", created: "Jun 16, 2026" },
  { id: "TK-1040", subject: "Two-factor authentication not sending SMS codes", customer: "James Okonkwo", status: "In Progress", priority: "High", created: "Jun 15, 2026" },
  { id: "TK-1039", subject: "Dashboard charts not loading on Safari 17", customer: "Elena Kovacs", status: "Open", priority: "Medium", created: "Jun 15, 2026" },
  { id: "TK-1038", subject: "Billing address update keeps reverting to previous value", customer: "Marcus Chen", status: "In Progress", priority: "Medium", created: "Jun 14, 2026" },
  { id: "TK-1037", subject: "API rate limit documentation is unclear for enterprise tier", customer: "Aisha Patel", status: "Resolved", priority: "Low", created: "Jun 13, 2026" },
  { id: "TK-1036", subject: "Webhook deliveries failing with 401 after key rotation", customer: "Tomas Novak", status: "Open", priority: "High", created: "Jun 13, 2026" },
  { id: "TK-1035", subject: "CSV import drops rows with special characters", customer: "Fatima Al-Sayed", status: "In Progress", priority: "Medium", created: "Jun 12, 2026" },
  { id: "TK-1034", subject: "Mobile app crashes when opening attachments", customer: "Liam O'Brien", status: "Open", priority: "High", created: "Jun 12, 2026" },
  { id: "TK-1033", subject: "Email notifications arriving hours late", customer: "Yuki Tanaka", status: "Resolved", priority: "Medium", created: "Jun 11, 2026" },
  { id: "TK-1032", subject: "Cannot remove a deactivated team member", customer: "Sofia Rossi", status: "Open", priority: "Low", created: "Jun 11, 2026" },
  { id: "TK-1031", subject: "Search returns no results for partial keywords", customer: "David Kim", status: "In Progress", priority: "Medium", created: "Jun 10, 2026" },
  { id: "TK-1030", subject: "Invoice totals rounding incorrectly in EUR", customer: "Camille Dubois", status: "Open", priority: "High", created: "Jun 10, 2026" },
  { id: "TK-1029", subject: "SSO login loop on corporate network", customer: "Ahmed Hassan", status: "In Progress", priority: "High", created: "Jun 9, 2026" },
  { id: "TK-1028", subject: "Dark mode contrast too low on settings page", customer: "Grace Lee", status: "Resolved", priority: "Low", created: "Jun 9, 2026" },
  { id: "TK-1027", subject: "Bulk status update only applies to first page", customer: "Nina Petrov", status: "Open", priority: "Medium", created: "Jun 8, 2026" },
  { id: "TK-1026", subject: "Timezone shown incorrectly in activity log", customer: "Carlos Mendez", status: "In Progress", priority: "Low", created: "Jun 8, 2026" },
  { id: "TK-1025", subject: "Attachment preview blank for large PNG files", customer: "Hannah Schmidt", status: "Open", priority: "Medium", created: "Jun 7, 2026" },
  { id: "TK-1024", subject: "Password reset link expires too quickly", customer: "Omar Farouk", status: "Resolved", priority: "Medium", created: "Jun 7, 2026" },
  { id: "TK-1023", subject: "Reporting dashboard slow with 90-day range", customer: "Isabella Costa", status: "Open", priority: "High", created: "Jun 6, 2026" },
  { id: "TK-1022", subject: "Duplicate tickets created from inbound email", customer: "Wei Zhang", status: "In Progress", priority: "Medium", created: "Jun 6, 2026" },
  { id: "TK-1021", subject: "Custom fields not saving on ticket creation", customer: "Mateo Silva", status: "Open", priority: "High", created: "Jun 5, 2026" },
  { id: "TK-1020", subject: "Slack integration posts to wrong channel", customer: "Lucas Müller", status: "Resolved", priority: "Low", created: "Jun 5, 2026" },
  { id: "TK-1019", subject: "Agent availability toggle resets on refresh", customer: "Amara Okafor", status: "In Progress", priority: "Medium", created: "Jun 4, 2026" },
  { id: "TK-1018", subject: "Knowledge base article images broken", customer: "Ravi Kapoor", status: "Open", priority: "Low", created: "Jun 4, 2026" },
];

const metrics = [
  { label: "Open Tickets", value: "24", context: "3 opened today", contextVariant: "blue" as const },
  { label: "High Priority", value: "7", context: "2 past SLA", contextVariant: "red" as const },
  { label: "Avg Response", value: "4.2h", context: "Target: under 6h", contextVariant: "green" as const },
];

const statusVariant: Record<TicketStatus, "blue" | "amber" | "green"> = {
  Open: "blue",
  "In Progress": "amber",
  Resolved: "green",
};

const priorityVariant: Record<TicketPriority, "red" | "amber" | "slate"> = {
  High: "red",
  Medium: "amber",
  Low: "slate",
};

const slaAlerts = [
  { id: "TK-1041", customer: "Priya Sharma", priority: "High" as const, overdue: "4h overdue" },
  { id: "TK-1040", customer: "James Okonkwo", priority: "High" as const, overdue: "2h overdue" },
];

const PAGE_SIZE = 8;
const STATUS_OPTIONS: TicketStatus[] = ["Open", "In Progress", "Resolved"];
const PRIORITY_OPTIONS: TicketPriority[] = ["High", "Medium", "Low"];

interface FilterState {
  statuses: Set<TicketStatus>;
  priorities: Set<TicketPriority>;
}

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const XIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const VDivider = () => (
  <div className="h-5 w-px bg-wire shrink-0" aria-hidden="true" />
);

function FilterBar({
  search,
  filters,
  onSearchChange,
  onToggleStatus,
  onTogglePriority,
  onClear,
  hasActiveFilters,
}: {
  search: string;
  filters: FilterState;
  onSearchChange: (value: string) => void;
  onToggleStatus: (s: TicketStatus) => void;
  onTogglePriority: (p: TicketPriority) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}) {
  const chipClass = (active: boolean) =>
    [
      "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border",
      "transition-colors active:scale-95",
      active
        ? "bg-accent text-white border-accent"
        : "border-wire text-ink-soft hover:border-accent hover:text-accent",
    ].join(" ");

  const clearBtn = (
    <button
      type="button"
      onClick={onClear}
      className="inline-flex items-center gap-1 text-xs text-ink-soft hover:text-ink transition-colors shrink-0"
    >
      <XIcon />
      Clear
    </button>
  );

  return (
    <div className="rounded-xl border border-wire bg-panel">
      {/* Mobile */}
      <div className="sm:hidden flex flex-col gap-2 p-3">
        <Input
          id="ticket-search-mobile"
          placeholder="Search by subject, customer, or ID…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          icon={<SearchIcon />}
        />
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none -mx-3 px-3 pb-0.5">
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onToggleStatus(s)}
              aria-pressed={filters.statuses.has(s)}
              className={`${chipClass(filters.statuses.has(s))} shrink-0`}
            >
              {s}
            </button>
          ))}
          <span className="text-wire text-xs shrink-0 select-none" aria-hidden="true">·</span>
          {PRIORITY_OPTIONS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onTogglePriority(p)}
              aria-pressed={filters.priorities.has(p)}
              className={`${chipClass(filters.priorities.has(p))} shrink-0`}
            >
              {p}
            </button>
          ))}
          {hasActiveFilters && (
            <>
              <span className="text-wire text-xs shrink-0 select-none" aria-hidden="true">·</span>
              {clearBtn}
            </>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-3 flex-wrap px-4 py-3">
        <div className="flex-1 min-w-48 max-w-xs">
          <Input
            id="ticket-search-desktop"
            placeholder="Search by subject, customer, or ID…"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            icon={<SearchIcon />}
          />
        </div>
        <VDivider />
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-ink-soft uppercase tracking-wide shrink-0">
            Status
          </span>
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onToggleStatus(s)}
              aria-pressed={filters.statuses.has(s)}
              className={chipClass(filters.statuses.has(s))}
            >
              {s}
            </button>
          ))}
        </div>
        <VDivider />
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-ink-soft uppercase tracking-wide shrink-0">
            Priority
          </span>
          {PRIORITY_OPTIONS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onTogglePriority(p)}
              aria-pressed={filters.priorities.has(p)}
              className={chipClass(filters.priorities.has(p))}
            >
              {p}
            </button>
          ))}
        </div>
        {hasActiveFilters && (
          <>
            <VDivider />
            {clearBtn}
          </>
        )}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    statuses: new Set(),
    priorities: new Set(),
  });
  const [page, setPage] = useState(1);

  const hasActiveFilters =
    filters.statuses.size > 0 || filters.priorities.size > 0 || search.trim() !== "";

  const filteredTickets = useMemo(() => {
    const query = search.trim().toLowerCase();
    return tickets.filter((t) => {
      const matchesSearch =
        query === "" ||
        t.subject.toLowerCase().includes(query) ||
        t.customer.toLowerCase().includes(query) ||
        t.id.toLowerCase().includes(query);
      const matchesStatus =
        filters.statuses.size === 0 || filters.statuses.has(t.status);
      const matchesPriority =
        filters.priorities.size === 0 || filters.priorities.has(t.priority);
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [search, filters]);

  useEffect(() => {
    setPage(1);
  }, [search, filters]);

  const totalPages = Math.max(1, Math.ceil(filteredTickets.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pagedTickets = filteredTickets.slice(startIndex, startIndex + PAGE_SIZE);
  const rangeStart = filteredTickets.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = Math.min(startIndex + PAGE_SIZE, filteredTickets.length);

  const toggleStatus = (s: TicketStatus) => {
    setFilters((prev) => {
      const next = new Set(prev.statuses);
      next.has(s) ? next.delete(s) : next.add(s);
      return { ...prev, statuses: next };
    });
  };

  const togglePriority = (p: TicketPriority) => {
    setFilters((prev) => {
      const next = new Set(prev.priorities);
      next.has(p) ? next.delete(p) : next.add(p);
      return { ...prev, priorities: next };
    });
  };

  const clearFilters = () => {
    setSearch("");
    setFilters({ statuses: new Set(), priorities: new Set() });
  };

  return (
    <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      {/* Page header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">
          Support Tickets
        </h1>
        <p className="mt-1.5 text-sm text-ink-soft max-w-xl leading-6">
          Monitor and manage customer support requests across all channels.
        </p>
      </div>

      {/* Metric cards — mobile: horizontal scroll strip */}
      <div className="sm:hidden -mx-4 px-4 overflow-x-auto mb-6 scrollbar-none">
        <div className="flex gap-3 w-max pr-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="w-44 shrink-0 rounded-xl border border-wire bg-panel shadow-sm px-4 py-3.5"
            >
              <p className="text-[10px] font-medium text-ink-soft uppercase tracking-widest leading-none">
                {m.label}
              </p>
              <p className="text-2xl font-semibold text-ink tabular-nums mt-2">{m.value}</p>
              <div className="mt-2">
                <Badge label={m.context} variant={m.contextVariant} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metric cards — desktop: 3-column grid */}
      <section
        aria-label="Key metrics"
        className="hidden sm:grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6"
      >
        {metrics.map((m) => (
          <Card key={m.label}>
            <CardHeader className="pb-2">
              <p className="text-xs font-medium text-ink-soft uppercase tracking-widest">
                {m.label}
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-3xl font-semibold text-ink tabular-nums">{m.value}</p>
              <div className="mt-2">
                <Badge label={m.context} variant={m.contextVariant} />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 lg:gap-6">

        {/* Left column: filter bar + ticket table */}
        <div className="flex flex-col gap-4 min-w-0">
          <FilterBar
            search={search}
            filters={filters}
            onSearchChange={setSearch}
            onToggleStatus={toggleStatus}
            onTogglePriority={togglePriority}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Recent Tickets</CardTitle>
              <p className="text-xs text-ink-soft mt-1">
                Latest support requests across all customers
              </p>
            </CardHeader>

            <CardContent className="px-0 pb-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-panel/90 backdrop-blur-sm">
                    <tr className="border-t border-wire">
                      <th className="text-left px-4 sm:px-6 py-3 text-xs font-medium text-ink-soft uppercase tracking-wide w-20 sm:w-24 hidden sm:table-cell">
                        ID
                      </th>
                      <th className="text-left px-3 sm:px-3 py-3 text-xs font-medium text-ink-soft uppercase tracking-wide pl-4 sm:pl-3">
                        Subject
                      </th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-ink-soft uppercase tracking-wide w-28 sm:w-36 hidden md:table-cell">
                        Customer
                      </th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-ink-soft uppercase tracking-wide w-28">
                        Status
                      </th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-ink-soft uppercase tracking-wide w-20 sm:w-24">
                        Priority
                      </th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-ink-soft uppercase tracking-wide w-24 sm:w-28 hidden lg:table-cell">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pagedTickets.map((ticket) => (
                      <tr
                        key={ticket.id}
                        className="border-t border-wire transition-colors hover:bg-surface"
                      >
                        <td className="px-4 sm:px-6 py-3.5 hidden sm:table-cell">
                          <span className="font-mono text-xs text-ink-soft">{ticket.id}</span>
                        </td>
                        <td className="py-3.5 pl-4 pr-3 sm:px-3 max-w-40 sm:max-w-xs">
                          <span className="text-ink line-clamp-1 font-medium text-xs sm:text-sm">
                            {ticket.subject}
                          </span>
                          <span className="text-[11px] text-ink-soft mt-0.5 block sm:hidden">
                            {ticket.id}
                          </span>
                        </td>
                        <td className="px-3 py-3.5 text-ink-soft hidden md:table-cell">
                          {ticket.customer}
                        </td>
                        <td className="px-3 py-3.5">
                          <Badge label={ticket.status} variant={statusVariant[ticket.status]} />
                        </td>
                        <td className="px-3 py-3.5">
                          <Badge label={ticket.priority} variant={priorityVariant[ticket.priority]} />
                        </td>
                        <td className="px-3 py-3.5 text-xs text-ink-soft hidden lg:table-cell">
                          {ticket.created}
                        </td>
                      </tr>
                    ))}

                    {pagedTickets.length === 0 && (
                      <tr className="border-t border-wire">
                        <td colSpan={6} className="px-6 py-12 text-center">
                          <p className="text-sm font-medium text-ink">No tickets match your filters</p>
                          <p className="text-xs text-ink-soft mt-1">
                            Try adjusting your search or clearing the active filters.
                          </p>
                          {hasActiveFilters && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4"
                              onClick={clearFilters}
                            >
                              Clear all filters
                            </Button>
                          )}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 border-t border-wire">
                <p className="text-xs text-ink-soft" aria-live="polite">
                  {filteredTickets.length === 0 ? (
                    "No matching tickets"
                  ) : (
                    <>
                      Showing{" "}
                      <span className="font-medium text-ink">{rangeStart}&ndash;{rangeEnd}</span>{" "}
                      of{" "}
                      <span className="font-medium text-ink">{filteredTickets.length}</span> tickets
                    </>
                  )}
                </p>

                {totalPages > 1 && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      Previous
                    </Button>
                    <span className="text-xs text-ink-soft tabular-nums px-1">
                      {currentPage} / {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: SLA alerts (desktop only) */}
        <div className="hidden lg:block">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>SLA Alerts</CardTitle>
              <p className="text-xs text-ink-soft">Tickets past response target</p>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col gap-3">
              {slaAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start justify-between gap-3 rounded-lg border border-red-200 bg-red-50/50 px-3 py-2.5"
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-mono text-xs text-ink-soft">{alert.id}</span>
                    <span className="text-xs text-ink truncate">{alert.customer}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <Badge label={alert.priority} variant={priorityVariant[alert.priority]} />
                    <span className="text-xs text-red-600 font-medium">{alert.overdue}</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-ink-soft pt-1">
                SLA target: first response within 6 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
