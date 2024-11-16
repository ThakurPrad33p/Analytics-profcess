import React from "react";
import Piechart from "./Charts/Piechart";
import Piecharttwo from "./Charts/Piecharttwo";
import Piechartthree from "./Charts/Piechartthree";
import Linechart from "./Charts/Linechart";
import Areachart from "./Charts/Areachart";
import LoginHeader from "./LoginHeader";
// import Colordetail from "./Charts/Colordetail";
// import { BarChart, LineChart } from "recharts";

const Login = () => {
  return (
    <>
      <LoginHeader />
      <div className="flex h-screen top-0 bg-slate-900">
        <div className="text-white text-2xl h-screen w-1/5 sm:w-1/4 lg:w-1/5 p-4">
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">
            Dashboard
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">Chats</p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">
            Portfolio
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">
            Invoice
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">Tasks</p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">
            Calendar
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">
            Traffic Source
          </p>
        </div>

        <span className="w-[2px] h-screen bg-slate-800 m-0"></span>

        <div className="w-full h-full p-4  mx-36">
          <h1 className="text-3xl font-bold text-white mb-4">Analytics</h1>

          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex  w-[32%] bg-gradient-to-b from-[#2f55ff] via-[#518cf8] to-[rgb(252,252,252)] rounded-2xl p-8">
              <div className="flex flex-col  text-white ">
                <h1 className="text-xl font-bold mb-3">Traffic Sources</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-yellow-400 w-3 h-3 mt-1"></span>
                    <p className="">India</p>
                  </div>
                  <p>20.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-blue-800 w-3 h-3 mt-1"></span>
                    <p className="">Pakistan</p>
                  </div>
                  <p>15.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-red-400 w-3 h-3 mt-1"></span>
                    <p className="">USA</p>
                  </div>
                  <p>20.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-pink-600 w-3 h-3 mt-1"></span>
                    <p className="">Australia</p>
                  </div>
                  <p>10.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-green-400 w-3 h-3 mt-1"></span>
                    <p className="">Canada</p>
                  </div>
                  <p>5.0%</p>
                </div>
              </div>
            </div>
            <div className="flex  w-[32%] bg-gradient-to-b from-[#2f55ff] via-[#518cf8] to-[rgb(252,252,252)] rounded-2xl p-8">
              <div className="flex flex-col  text-white ">
                <h1 className="text-xl font-bold mb-3">User Engagement </h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-yellow-400 w-3 h-3 mt-1"></span>
                    <p className="">India</p>
                  </div>
                  <p>20.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-blue-800 w-3 h-3 mt-1"></span>
                    <p className="">Pakistan</p>
                  </div>
                  <p>15.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-red-400 w-3 h-3 mt-1"></span>
                    <p className="">USA</p>
                  </div>
                  <p>20.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-pink-600 w-3 h-3 mt-1"></span>
                    <p className="">Australia</p>
                  </div>
                  <p>10.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-green-400 w-3 h-3 mt-1"></span>
                    <p className="">Canada</p>
                  </div>
                  <p>5.0%</p>
                </div>
              </div>
            </div>
            <div className="flex  w-[32%] bg-gradient-to-b from-[#2f55ff] via-[#518cf8] to-[rgb(252,252,252)] rounded-2xl p-8">
              <div className="flex flex-col  text-white ">
                <h1 className="text-xl font-bold mb-3">Conversion Metrices</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-yellow-400 w-3 h-3 mt-1"></span>
                    <p className="">India</p>
                  </div>
                  <p>20.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-blue-800 w-3 h-3 mt-1"></span>
                    <p className="">Pakistan</p>
                  </div>
                  <p>15.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-red-400 w-3 h-3 mt-1"></span>
                    <p className="">USA</p>
                  </div>
                  <p>20.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-pink-600 w-3 h-3 mt-1"></span>
                    <p className="">Australia</p>
                  </div>
                  <p>10.0%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center gap-2 ">
                    <span className="bg-green-400 w-3 h-3 mt-1"></span>
                    <p className="">Canada</p>
                  </div>
                  <p>5.0%</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[49%]  bg-gradient-to-b from-[#2f55ff] via-[#518cf8] to-[rgb(252,252,252)] rounded-2xl p-4">
              <h2 className="text-xl font-semibold text-white h-full  pts-8">
                Line Graph
              </h2>
              <div className="flex justify-center items-center">
                <Areachart />
              </div>
            </div>
            <div className="flex flex-col w-[49%]  bg-gradient-to-b from-[#2f55ff] via-[#518cf8] to-[rgb(252,252,252)] rounded-2xl p-4">
              <h2 className="text-xl font-semibold text-white h-full  pts-8">
                Bar Graph
              </h2>
              <div className="flex justify-center items-center">
                <Linechart />
              </div>
            </div>
            <div className="flex justify-center  w-[32%]  bg-gradient-to-b from-[#2f55ff] via-[#518cf8] to-[rgb(252,252,252)] rounded-2xl">
              <div className="flex flex-col pl-6 text-white pt-6">
                <h1 className="text-xl font-bold mb-3">Traffic Source</h1>
                <div className="flex gap-2 ">
                  <span className="bg-yellow-400 w-3 h-3 mt-1"></span>
                  <p className="">India</p>
                </div>
                <div className="flex  gap-2 ">
                  <span className="bg-blue-800 w-3 h-3 mt-1"></span>
                  <p className="">Pakistan</p>
                </div>
                <div className="flex  gap-2 ">
                  <span className="bg-red-400 w-3 h-3 mt-1"></span>
                  <p className="">USA</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Piechartthree />
              </div>
            </div>
            <div className="flex justify-center  w-[33%]  bg-gradient-to-b from-[#2f55ff] via-[#518cf8] to-[rgb(252,252,252)] rounded-2xl">
              <div className="flex flex-col pl-6 text-white pt-6">
                <h1 className="text-xl font-bold mb-3">Employee Mood</h1>
                <div className="flex gap-2 ">
                  <span className="bg-yellow-400 w-3 h-3 mt-1"></span>
                  <p className="">India</p>
                </div>
                <div className="flex  gap-2 ">
                  <span className="bg-blue-800 w-3 h-3 mt-1"></span>
                  <p className="">Pakistan</p>
                </div>
                <div className="flex  gap-2 ">
                  <span className="bg-red-400 w-3 h-3 mt-1"></span>
                  <p className="">USA</p>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <Piechart />
                <div className="absolute top-0 left-0 right-0  flex justify-center h-full items-center  text-white text-2xl">
                  87%
                </div>
              </div>
            </div>
            <div className="flex justify-between  w-[32%]  bg-gradient-to-b from-[#2f55ff] via-[#518cf8] to-[rgb(252,252,252)] rounded-2xl">
              <div className="flex flex-col pl-6 text-white pt-6">
                <h1 className="text-xl font-bold mb-3">Traffic Source</h1>
                <div className="flex gap-2 ">
                  <span className="bg-yellow-400 w-3 h-3 mt-1"></span>
                  <p className="">India</p>
                </div>
                <div className="flex  gap-2 ">
                  <span className="bg-blue-800 w-3 h-3 mt-1"></span>
                  <p className="">Pakistan</p>
                </div>
                <div className="flex  gap-2 ">
                  <span className="bg-red-400 w-3 h-3 mt-1"></span>
                  <p className="">USA</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Piecharttwo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
