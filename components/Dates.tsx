import React from 'react';

const Dates = () => {
  return (
    <section className="flexLeft pl-16 pr-16 w-full flex-col pb-[100px]">
      <div className="dates">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <div className="flex w-full justify-between">
            <div className="w-1/4">
              <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Important Dates</h2>
            </div>
            <div className="dates-list w-2/3">
              <div className="date-card">
                <div className="date">
                  <span className="bold-24">October 15, 2024</span>
                </div>
                <div className="event">
                  <span className="regular-18">Paper Submission Deadline</span>
                </div>
              </div>
              <div className="date-card">
                <div className="date">
                  <span className="bold-24">January 15, 2025</span>
                </div>
                <div className="event">
                  <span className="regular-18">Notification of Acceptance</span>
                </div>
              </div>
              <div className="date-card">
                <div className="date">
                  <span className="bold-24">January 30, 2025</span>
                </div>
                <div className="event">
                  <span className="regular-18">Registration Last Date</span>
                </div>
              </div>
              <div className="date-card">
                <div className="date">
                  <span className="bold-24">February 15, 2025</span>
                </div>
                <div className="event">
                  <span className="regular-18">Camera Ready Submission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dates;