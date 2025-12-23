import React from "react";

const ExclusiveAccess = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="px-6 text-center space-y-4">
        <p
          className="text-xs tracking-[0.28em] uppercase text-[#BB924D]"
          style={{ fontFamily: "BonaNova" }}
        >
          404
        </p>
        <h1
          className="text-2xl sm:text-4xl tracking-[0.18em] uppercase"
          style={{ fontFamily: "BonaNova" }}
        >
          Work In Progress
        </h1>
        <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto">
          We&apos;re putting the final touches on this experience. Please check
          back soon for exclusive access.
        </p>
      </div>
    </main>
  );
};

export default ExclusiveAccess;
