export const HeroSectionComponent = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/hero.png" className="max-w-full" />

        <div>
          <div className="badge badge-soft">AI-Powered. Instant Results.</div>

          <h1 className="text-5xl font-bold">
            Book a Schengen Visa Appointment in <span>1 week</span>
          </h1>

          <p className="py-6">
            You Trusted Visa Bot for Instant Notifications and Auto-Booking.
          </p>

          <form>
            <input type="text" className="input" placeholder="Going to" />

            <select className="input">
              <option value="">Visa type</option>
            </select>

            <input
              type="text"
              className="input"
              placeholder="Select an application"
            />

            <input
              type="text"
              className="input"
              placeholder="Select application city"
            />

            <button className="btn btn-primary">Find Appointments</button>
          </form>
        </div>
      </div>
    </div>
  );
};
