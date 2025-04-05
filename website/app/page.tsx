"use client";

import React from "react";
import { poppr, PopprModal } from "../../src/index"; // adjust as needed

export default function Home() {
  return (
    <>
      <PopprModal />

      <div className="min-h-screen flex flex-col items-center justify-center gap-4  p-8">
        <h1 className="text-2xl font-semibold mb-4">🧪 Poppr Demo</h1>

        <button
          onClick={() => poppr("This is a default modal")}
          className="demo-btn"
        >
          🟦 Default Modal
        </button>

        <button
          onClick={() =>
            poppr("All good!", {
              type: "success",
              cancelAction: {
                label: "Dismiss",
                onClick: () => poppr.close(),
              },
            })
          }
          className="demo-btn"
        >
          ✅ Success Modal
        </button>

        <button
          onClick={() =>
            poppr("Something went wrong!", {
              type: "error",
              confirmAction: {
                label: "Retry",
                onClick: () => {
                  console.log("Retry clicked");
                  poppr.close();
                },
              },
              cancelAction: {
                label: "Cancel",
                onClick: () => poppr.close(),
              },
            })
          }
          className="demo-btn"
        >
          ❌ Error Modal
        </button>

        <button
          onClick={() =>
            poppr("Heads up!", {
              type: "warning",
              cancelAction: {
                label: "Got it",
                onClick: () => poppr.close(),
              },
            })
          }
          className="demo-btn"
        >
          ⚠️ Warning Modal
        </button>

        <button
          onClick={() =>
            poppr.confirm("Are you sure you want to delete this?", async () => {
              alert("Deleted!");
            })
          }
          className="demo-btn"
        >
          🛑 Confirm Modal
        </button>

        <button
          onClick={() =>
            poppr.promise(
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const ok = Math.random() > 0.5;
                  ok ? resolve("Done!") : reject("Something failed");
                }, 1500);
              }),
              {
                loading: "Saving...",
                success: (res) => ({
                  message: `✅ Success: ${res}`,
                }),
                error: (err) => ({
                  message: `❌ Error: ${err}`,
                }),
              }
            )
          }
          className="demo-btn"
        >
          ⏳ Promise Modal
        </button>

        <button
          onClick={async () => {
            // Step 1: Show a loading modal
            const id = poppr("Loading user data...", {
              type: "loading",
              cancelAction: {
                label: "Cancel",
                onClick: () => poppr.close(),
              },
            });

            try {
              // Step 2: Simulate an async action (3 seconds)
              const result = await new Promise<string>((resolve, reject) =>
                setTimeout(() => {
                  const ok = Math.random() > 0.5;
                  ok
                    ? resolve("User data loaded successfully.")
                    : reject("Failed to load user.");
                }, 3000)
              );

              // Step 3: Update the modal to a success state
              poppr(result, {
                id,
                type: "success",
                title: "✅ Success",
                confirmAction: {
                  label: "Awesome",
                  onClick: () => poppr.close(),
                },
              });
            } catch (err) {
              // Step 4: Update the modal to an error state
              poppr(String(err), {
                id,
                type: "error",
                title: "❌ Error",
                cancelAction: {
                  label: "Close",
                  onClick: () => poppr.close(),
                },
              });
            }
          }}
          className="demo-btn"
        >
          🔄 Load & Update Modal
        </button>
      </div>

      <style jsx>{`
        .demo-btn {
          background-color: #3b82f6;
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: transform 0.1s ease;
        }

        .demo-btn:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}
