import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
export default function Project() {
  return (
    <div className="mt-20">
      <h1 className="text-6xl  text-center">Projects</h1>
      <div className="flex m-8 justify-center gap-8 mt-12 flex-wrap ">
        <div className="flex flex-col border sm:max-w-lg  lg:max-w-sm rounded-3xl overflow-hidden bg-white scale-90 transition-all duration-500 hover:shadow-red-700 shadow-2xl hover:scale-95">
          <div className="">
            <img src="/MazeGame.jpg" className="h-96" ></img> 
          </div>
          <div className="flex flex-col items-center bg-white text-black">
            <h1 className="font-mono text-2xl font-bold mt-3 ">
              Maze Game{" "}
              <Link to="https://github.com/shanaulakh29">
                <div className="inline-block border border-black p-2 rounded-full hover:border-green-500 hover:border-2 relative -top-1">
                  <GitHubIcon
                    className="animate-pulse"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </Link>
            </h1>
            <p className="p-4 tracking-wide font-serif text-stone-600">
              The Maze Game is developed in Java using Object-Oriented
              Programming principles and follows the MVC (Model-View-Controller)
              design pattern. It separates game logic (Model), user interactions
              (Controller), and visuals (View), ensuring a modular and scalable
              structure. Key OOP concepts like encapsulation, inheritance are
              utilized to manage game elements like the player, maze layout, and
              enemy behavior.
            </p>
          </div>
        </div>
        <div className="flex flex-col border sm:max-w-lg lg:max-w-sm rounded-3xl overflow-hidden bg-white scale-90 transition-all duration-500 hover:shadow-red-700 shadow-2xl hover:scale-95">
          <div>
            <img src="/WaterPurification.png" className="h-96"></img>
          </div>

          <div className="flex flex-col items-center bg-white text-black">
            <h1 className="font-mono text-2xl font-bold mt-3 ">
              Inventory Management{" "}
              <Link to="https://github.com/shanaulakh29">
                <div className="inline-block border border-black p-2 rounded-full hover:border-green-500 hover:border-2 relative -top-1">
                  <GitHubIcon
                    className="animate-pulse"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </Link>
            </h1>
            <p className="p-4 tracking-wide font-serif text-stone-600">
              Built using Java, MVC architecture, object-oriented design, JSON
              data handling, validation, and Git/GitHub, this project is an
              advanced inventory management system for water purification units.
              It provides a streamlined, menu-driven interface where users can
              track model information, ensure serial number uniqueness, manage
              test results, and monitor shipping status.
            </p>
          </div>
        </div>
        <div className="flex flex-col border sm:max-w-lg md-max-w-sm lg:max-w-sm rounded-3xl overflow-hidden bg-white scale-90 transition-all duration-500 hover:shadow-red-700 shadow-2xl hover:scale-95">
          <div className="border">
            <img src="/ExpenseTracker.jpg" className="h-96"></img>
          </div>
          <div className="flex flex-col items-center bg-white text-black">
            <h1 className="font-mono text-3xl font-bold mt-3 ">
              Maze Game{" "}
              <Link to="https://github.com/shanaulakh29">
                <div className="inline-block border border-black p-2 rounded-full hover:border-green-500 hover:border-2 relative -top-1">
                  <GitHubIcon
                    className="animate-pulse"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </Link>
            </h1>
            <p className="p-4 tracking-wide font-serif text-stone-600">
              Leveraging skills in React, Redux and responsive UI design, this
              Expense Tracker application provides a seamless way to manage
              personal finances. Built with Redux to manage the global store, it
              efficiently tracks and displays total earnings, expenses, and
              current balance, offering users real-time updates on their
              financial status.
            </p>
          </div>
        </div>
        <div className="flex flex-col border sm:max-w-lg md-max-w-sm lg:max-w-sm rounded-3xl overflow-hidden bg-white scale-90 transition-all duration-500 hover:shadow-red-700 shadow-2xl hover:scale-95">
          <div className="border">
            <img src="/MovieAppImage.jpeg" className="h-96"></img>
          </div>
          <div className="flex flex-col items-center bg-white text-black">
            <h1 className="font-mono text-3xl font-bold mt-3 ">
              Maze Game{" "}
              <Link to="https://github.com/shanaulakh29">
                <div className="inline-block border border-black p-2 rounded-full hover:border-green-500 hover:border-2 relative -top-1">
                  <GitHubIcon
                    className="animate-pulse"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </Link>
            </h1>
            <p className="p-4 tracking-wide font-serif text-stone-600">
              Built using React, Redux, and API integration, this Movie Search
              application enables users to find films and shows through a
              dynamic search box. Leveraging an open-source movie web API, the
              app efficiently retrieves and displays relevant results, offering
              detailed information—including ratings, descriptions, and
              runtime—when a specific movie is selected.
            </p>
          </div>
        </div>
        <div className="flex flex-col border sm:max-w-lg md-max-w-sm lg:max-w-sm rounded-3xl overflow-hidden bg-white scale-90 transition-all duration-500 hover:shadow-red-700 shadow-2xl hover:scale-95">
          <div className="border">
            <img src="/WeatherAppImage.jpeg" className="h-96"></img>
          </div>
          <div className="flex flex-col items-center bg-white text-black">
            <h1 className="font-mono text-3xl font-bold mt-3 ">
              Maze Game{" "}
              <Link to="https://github.com/shanaulakh29">
                <div className="inline-block border border-black p-2 rounded-full hover:border-green-500 hover:border-2 relative -top-1">
                  <GitHubIcon
                    className="animate-pulse"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </Link>
            </h1>
            <p className="p-4 tracking-wide font-serif text-stone-600">
              Made using HTML, CSS, JavaScript, and API integration, this
              Weather Application allows users to input a city name and retrieve
              relevant weather information. Utilizing an open-source weather
              API, the app displays essential details such as temperature,
              weather visuals (sunny, cloudy, rainy), wind speed, and humidity.
            </p>
          </div>
        </div>
        <div className="flex flex-col border sm:max-w-lg md-max-w-sm lg:max-w-sm rounded-3xl overflow-hidden bg-white scale-90 transition-all duration-500 hover:shadow-red-700 shadow-2xl hover:scale-95">
          <div className="border">
            <img src="/AppointmentPlanner.jpeg" className="h-96"></img>
          </div>
          <div className="flex flex-col items-center bg-white text-black">
            <h1 className="font-mono text-3xl font-bold mt-3 ">
              Maze Game{" "}
              <Link to="https://github.com/shanaulakh29">
                <div className="inline-block border border-black p-2 rounded-full hover:border-green-500 hover:border-2 relative -top-1">
                  <GitHubIcon
                    className="animate-pulse"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </Link>
            </h1>
            <p className="p-4 tracking-wide font-serif text-stone-600">
              Built with React, this project features a simple appointment
              booking form that allows users to enter their information and
              schedule appointments. The form includes validation checks to
              ensure that submissions are only accepted when the data meets the
              required format.
            </p>
          </div>
        </div>
        <div className="flex flex-col border sm:max-w-lg md-max-w-sm lg:max-w-sm rounded-3xl overflow-hidden h-heightForProjectCards bg-white scale-90 transition-all duration-700 hover:shadow-red-500 shadow-2xl hover:scale-95">
          <div className="border">
            <img src="/ProductModel.jpeg" className="h-96"></img>
          </div>
          <div className="flex flex-col items-center bg-white text-black">
            <h1 className="font-mono text-3xl font-bold mt-3 ">
              Maze Game{" "}
              <Link to="https://github.com/shanaulakh29">
                <div className="inline-block border border-black p-2 rounded-full hover:border-green-500 hover:border-2 relative -top-1">
                  <GitHubIcon
                    className="animate-pulse"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </Link>
            </h1>
            <p className="p-4 tracking-wide font-serif text-stone-600">
              Utilizing Tailwind CSS, this project features a sleek modal for
              headphones that showcases key product information, including the
              title, description, discounted cost, and availability.
            </p>
          </div>
        </div>
        <div className="flex flex-col border sm:max-w-lg md-max-w-sm lg:max-w-sm rounded-3xl overflow-hidden h-heightForProjectCards bg-white scale-90 transition-all duration-700 hover:shadow-red-500 shadow-2xl hover:scale-95">
          <div className="border">
            <img src="/UserList.jpeg" className="h-96"></img>
          </div>
          <div className="flex flex-col items-center bg-white text-black">
            <h1 className="font-mono text-3xl font-bold mt-3 ">
              Maze Game{" "}
              <Link to="https://github.com/shanaulakh29">
                <div className="inline-block border border-black p-2 rounded-full hover:border-green-500 hover:border-2 relative -top-1">
                  <GitHubIcon
                    className="animate-pulse"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </Link>
            </h1>
            <p className="p-4 tracking-wide font-serif text-stone-600">
              Using Bootstrap, this project showcases a well-organized user list
              enhanced with elegant styling and bootstrap predefined classes. It
              includes a dark mode and light mode toggle, providing users with
              the flexibility to customize their viewing experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
