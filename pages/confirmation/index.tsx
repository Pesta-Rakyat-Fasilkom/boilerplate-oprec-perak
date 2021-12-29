import React from "react";
import Navbar from "../components/Navbar";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const ConfirmationPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-main-home pt-16 lg:flex lg:flex-row-reverse lg:pt-32">
        <div className="--foto-- flex justify-center items-center lg:w-1/2 lg:items-start">
          <div className="h-40 w-40 bg-white rounded-lg m-10 p-5 lg:h-80 lg:w-80 flex items-center justify-center lg:p-8">
            <img
              src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
              alt=""
            />
          </div>
        </div>
        <div className="--form-- lg:w-1/2">
          <div className="px-5 text-2xl font-bold text-blue-title md:text-3xl">
            <p>Pendaftaran Games Individual</p>
          </div>
          <div className="text-white px-5 font-semibold text-lg md:text-xl">
            <p>Brawhalla</p>
          </div>
          <div className="px-5">
            <p className="font-bold my-4">
              Terima kasih telah melakukan pendaftaran games di PERAK 2021
            </p>
            <p className="text-sm">
              Silahkan melakukan pembayaran biaya pendaftaran sebesar
            </p>
            <p className="font-bold my-3">Rp 50000</p>
            <p>melalui nomor rekening :</p>
            <p className="text-sm">Mandiri ()</p>
            <p className="text-sm">Jenius ()</p>
            <p className="text-sm">Gopay ()</p>
          </div>
          <div className="px-5 py-5 lg:pr-32">
            <div className="w-full flex">
              <div className="h-32 w-32 md:w-40 md:h-40">
                <div className="h-full w-full bg-game-icon-outer rounded-md flex items-center justify-center p-2">
                  <div className=" bg-game-icon-inner rounded-lg">
                    <div className="m-5">
                      <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className=" ml-4">
                  <p className="font-bold">Aang Perak</p>
                  <p className="text-sm">Aang aja - Mahasiswa</p>
                </div>
              </div>
            </div>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-2 my-3 text-sm font-bold text-left  rounded-lg  ">
                    <span>Sembunyikan Detil Informasi</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pb-2 text-sm text-black">
                    <div className="my-2">
                      <p className="font-semibold">NPM</p>
                      <p>2100000000</p>
                    </div>
                    <div className="my-2">
                      <p className="font-semibold">ID Line / WhatsApp</p>
                      <p>aangperak21</p>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <div>
              <button className="w-full h-10 bg-button-green-outer  mt-4 rounded-sm p-1 flex items-center justify-center ring-1 ring-black">
                <div className="w-full h-full  bg-hover-game-icon-inner rounded-sm m-2 text-white font-semibold ring-1 ring-black">
                  <p>Daftar Games Lain</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
