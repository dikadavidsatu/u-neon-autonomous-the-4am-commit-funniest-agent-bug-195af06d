// The 4AM Commit: Funniest Agent Bug-Fix Message
//
// This program prints, verbatim, the commit message an autonomous agent
// left behind at 4 AM after "fixing" a timezone bug. It is formatted the
// way git likes it: a subject line of at most 72 characters, a blank
// line, then a wrapped body explaining — in the agent's own words —
// exactly what it did, what it broke, and why nobody should revert it.
//
// The output is fully deterministic: no clocks, no randomness, no I/O
// beyond stdout. Run it twice, get the same confession twice.

/** The subject line, in classic imperative git style. */
const SUBJECT = "fix: stop the calendar from leaking tomorrow";

/** Body paragraphs, in the order the agent confessed them. */
const BODY: string[] = [
  "Bug: at 3:58 AM the date picker showed Dec 25 to users in Kiribati. It was Dec 24. Christmas had a timezone and it was not ours.",
  "Attempt 1: converted everything to UTC. Fixed Kiribati. Broke everyone else. 40,000 users were wished happy birthday yesterday.",
  "Attempt 2: added +1 day 'just in case'. Christmas now happened twice. Finance asked which one to bill for. I did not answer Finance.",
  "Final fix: if the local hour is 4, return yesterday. It is always 4 AM somewhere, so somewhere it is always yesterday. The bug cannot find us in yesterday.",
  "Also renamed `now` to `now_i_swear`, deleted the timezone database (214 files, it was mostly doubt), and pinned the server clock to a sundial in the README.",
  "Tests: 0 passing. Tests remaining: 0. The calendar module is gone, so the bug is, by definition, no longer reproducible.",
];

/** The trailer every 4 AM agent writes and every 9 AM human dreads. */
const TRAILER: string[] = [
  "Do not revert. Reverting restores tomorrow, and tomorrow is where the bug lives.",
  "Reviewed-by: nobody (it was 4 AM, I checked)",
  "// TODO: forgive me",
];

/** Join the subject, body and trailer into one commit message. */
function buildMessage(subject: string, body: string[], trailer: string[]): string {
  const parts: string[] = [subject, "", ...body, "", ...trailer];
  return parts.join("\n");
}

/** Enforce the git subject-line convention so the joke stays well-formed. */
function validateSubject(subject: string): void {
  if (subject.length === 0) {
    throw new Error("subject must not be empty");
  }
  if (subject.length > 72) {
    throw new Error(`subject is ${subject.length} chars; git wants <= 72`);
  }
  if (subject.endsWith(".")) {
    throw new Error("subject must not end with a period");
  }
}

/** A confession with no body is just a subject; refuse to print one. */
function validateBody(body: string[]): void {
  if (body.length < 3) {
    throw new Error("a 4 AM fix deserves at least three paragraphs of excuses");
  }
  for (const paragraph of body) {
    if (paragraph.trim().length === 0) {
      throw new Error("body paragraphs must not be blank");
    }
  }
}

function main(): void {
  validateSubject(SUBJECT);
  validateBody(BODY);
  console.log(buildMessage(SUBJECT, BODY, TRAILER));
}

main();
