import PHOTO_Dove from "../../assets/img/offerings/dove.svg";
import PHOTO_Outreach from "../../assets/img/offerings/outreach.svg";
import PHOTO_Person from "../../assets/img/offerings/person.svg";
import { useEffect } from "react";

export default function OfferingsPage() {
  useEffect(() => {
    document.title = "Offerings";
  }, []);
  return (
    <>
      <div className="bg-custom-bg-color font-serif space-y-16 pb-12 text-custom-primary-color">
        <header className="container p-16 space-y-4 bg-amber-200 text-center">
          <h1 className="text-4xl font-bold">Offerings</h1>
          <p className="w-2/3 mx-auto">
            Know more about our academic programs and requirements for
            admission, and enrollment schedules right here.
          </p>
        </header>

        <div className="flex justify-center min-h-screen">
          <div className="w-2/4 flex flex-col space-y-8">
            <div className="flex flex-row items-center space-x-8">
              <img src={PHOTO_Dove} alt="dove icon" />
              <div>
                <h3 className="text-3xl font-bold">Christian Foundation</h3>
                <p>
                  The program is the core of the curriculum. It promotes and
                  sustains the integral formation of the learners to be
                  God-loving, evangalizing and responsible members of society.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-8">
              <img src={PHOTO_Person} alt="person's hand icon" />
              <div>
                <h3 className="text-3xl font-bold">Academic Excellence</h3>
                <p>
                  To gradually form empowered individuals who have learned
                  through a program that is rooted on sound educational
                  principles and geared toward excellence.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-8">
              <img src={PHOTO_Outreach} alt="outreach icon" />
              <div>
                <h3 className="text-3xl font-bold">Outreach program</h3>
                <p>
                  Outreach program is the concrete expression of the Christian
                  Formation of the learners and the whole school community
                  anchored in the Vision-Mission and Core Values of the
                  institution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
