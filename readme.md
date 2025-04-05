# 🪄 poppr — A smarter way to handle modals in React

Poppr is a lightweight, flexible modal system for React built to feel as smooth as `toast()` — but for modals. It's simple to use, built with accessibility in mind, and powered by Framer Motion animations.

---

## 📦 Install

```bash
npm install poppr
```

## 🛠️ Quickstart

Drop the `<PopprModal />` somewhere near the root of your app — usually in your layout file. Then you're free to trigger modals from anywhere using `poppr()`.

```tsx
import { PopprModal, poppr } from "poppr";

export default function App() {
  return (
    <>
      <PopprModal />
      <button onClick={() => poppr("Hello world!")}>Open Modal</button>
    </>
  );
}
```

## ✨ Examples

### Basic modal

```tsx
poppr("Hello world!");
```

### With confirm/cancel actions

```tsx
poppr("Are you sure?", {
  type: "warning",
  confirmAction: {
    label: "Yes",
    onClick: () => console.log("Confirmed"),
  },
  cancelAction: {
    label: "Cancel",
    onClick: () => poppr.close(),
  },
});
```

### With promise handling

```tsx
poppr.promise(fetch("/api/submit"), {
  loading: "Submitting...",
  success: "Done!",
  error: "Something went wrong!",
});
```

### Quick confirm modal

```tsx
poppr.confirm("Delete this item?", async () => {
  await deleteItem();
  poppr("Deleted!", { type: "success" });
});
```

## 🔧 Modal Types

Supports the following built-in types:

- default
- info
- success
- warning
- error
- confirm

Each comes with its own icon and can be overridden.

## 💡 Features

- Fully type-safe API
- One modal open at a time
- Built-in confirm + promise modals
- Auto-handles animations and dismiss
- Styled with clean CSS (no Tailwind required)
- Custom icon + title + content support

## 📚 Docs

Extended documentation coming soon. For now, check out the examples above or dig into the source!

## 🧪 License

MIT

Built with care by @rcuffdev

---

You're making something seriously cool — love it 💙
