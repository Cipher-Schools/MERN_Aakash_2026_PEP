## Topic: CSS Overflow

**What is it?**
Overflow controls what happens when content inside an element is larger than its defined width or height.

**Why do we need it?**
Without overflow handling, content may spill outside containers and break layout.

**How it works**

* `visible` → content spills out
* `hidden` → extra content is clipped
* `scroll` → always shows scrollbars
* `auto` → scrollbars appear only when needed

**Real-world use case**
Chat windows with scrollable messages.

**Key Points**

* Prevents layout breaking
* Useful for scrollable containers

---

## Topic: Media Queries

**What is it?**
Media queries allow CSS to change based on screen size or device type.

**Why do we need it?**
Users access websites on mobiles, tablets, and desktops.

**How it works**
CSS rules inside `@media` apply only when condition matches.

**Real-world use case**
Mobile menu replacing desktop navbar.

**Key Points**

* Enables responsive design
* Based on width, height, orientation

---

## Topic: Flexbox

(Condensed here since already covered previously but extended)

**What is it?**
A one-dimensional layout system.

**Why do we need it?**
Easy alignment and spacing.

**How it works**
Parent becomes flex container; children become flex items.

**Real-world use case**
Navigation bars and card rows.

**Key Points**

* Controls alignment, spacing, order
* Works in rows or columns

---

## Topic: CSS Grid

**What is it?**
Two-dimensional layout system for rows and columns.

**Why do we need it?**
Complex page layouts become easy.

**How it works**
Define grid tracks; place items using line numbers.

**Real-world use case**
Dashboard layouts.

**Key Points**

* Handles both rows and columns
* More powerful than flexbox for layout

---

## Topic: CSS Positioning

**What is it?**
Position property controls how elements are placed.

**Why do we need it?**
To create overlays, fixed headers, popups.

**How it works**
Each value positions elements differently relative to document or viewport.

**Real-world use case**
Sticky navbar, fixed chat button.

**Key Points**

* static (default)
* relative (offset from itself)
* absolute (relative to nearest positioned parent)
* fixed (relative to viewport)
* sticky (hybrid scroll behavior)

---

## Topic: JavaScript var, let, const

**What is it?**
Ways to declare variables in JavaScript.

**Why do we need it?**
To store and manage data.

**How it works**

* var → function scoped
* let → block scoped
* const → block scoped, cannot reassign

**Real-world use case**
Storing user input, API data, counters.

**Key Points**

* Prefer let and const
* const for fixed values
* Avoid var in modern JS