import React from "react";
import Navbar from "../components/Navbar";
import { Fragment, useState } from "react";
import { RadioGroup, Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const RegistrationPage = () => {
  let [role, setRole] = useState("startup");

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
            <p className="font-semibold">Biaya Pendaftaran : Rp 50000</p>
            <p className="text-xs">
              Instruksi Pembayaran diberikan setelah mengisi form pendaftaran
            </p>
          </div>
          <form className="px-5 pt-5 lg:pr-32">
            {/* jangan lupa ubah value */}
            <RadioGroup value={role} onChange={setRole}>
              <RadioGroup.Option value="startup">
                {({ checked }) => (
                  <span
                    className={
                      checked
                        ? "w-auto bg-green-500 inline-flex cursor-pointer mb-4 rounded-md p-2"
                        : "bg-red-500 cursor-pointer my-4 rounded-md p-2"
                    }
                  >
                    {checked && (
                      <div className="flex-shrink-0 text-white">
                        <CheckCircleIcon className="w-6 h-6" />
                      </div>
                    )}
                    Elemen Staf / Dosen
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="Bus">
                {({ checked }) => (
                  <span
                    className={
                      checked
                        ? "w-auto bg-green-500 inline-flex cursor-pointer mt-4 p-2 rounded-md"
                        : "bg-red-500 cursor-pointer my-6 p-2 rounded-md"
                    }
                  >
                    {checked && (
                      <div className="flex-shrink-0 text-white">
                        <CheckCircleIcon className="w-6 h-6" />
                      </div>
                    )}
                    Mahasiswa
                  </span>
                )}
              </RadioGroup.Option>
            </RadioGroup>
            <div className="mt-5 lg:my-5">
              <p className="text-sm">Nama Lengkap</p>
              <input
                type="text"
                className="w-full ring-1 ring-black rounded-sm px-3"
              />
            </div>
            <div className="my-2 lg:my-5">
              <p className="text-sm">Nama Panggilan (IGN)</p>
              <input
                type="text"
                className="w-full ring-1 ring-black rounded-sm px-3"
              />
            </div>
            <div className="my-2 lg:my-5">
              <p>Profile Picture</p>
              <div className="h-32 w-32 md:w-40 md:h-40">
                <div className="h-full w-full bg-game-icon-outer rounded-md flex items-center justify-center p-2">
                  <div className=" bg-game-icon-inner rounded-lg">
                    <div className="m-5">
                      <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex h-7 gap-3">
              <button className="bg-button-yellow-outer w-1/2 rounded-sm border border-black duration-300 hover:bg-button-yellow-inner active:bg-button-yellow-inner">
                <div className="bg-button-yellow-inner m-1 w-auto h-auto rounded-sm border-black border flex items-center justify-center text-xs font-bold hover:bg-button-yellow-outer active:bg-button-yellow-outer">
                  Pilih Gambar
                </div>
              </button>
              <input
                type="text"
                className="w-1/2 ring-1 ring-black rounded-sm px-3 text-xs"
              />
            </div>
            <div className="my-2 lg:my-5">
              <p className="text-sm">NPM</p>
              <input
                type="text"
                className="w-full ring-1 ring-black rounded-sm px-3"
              />
            </div>
            <div className="my-2 lg:my-5">
              <p className="text-sm">ID LINE / WhatsApp</p>
              <input
                type="text"
                className="w-full ring-1 ring-black rounded-sm px-3"
              />
            </div>
          </form>
          <div className="px-5 py-5 lg:pr-32">
            <button
              className="w-full h-10 bg-button-green-outer  mt-4 rounded-sm p-1 flex items-center justify-center  ring-1 ring-black"
              onClick={openModal}
            >
              <div className="w-full h-full  bg-hover-game-icon-inner rounded-sm m-2 text-white font-semibold  ring-1 ring-black">
                <p>Daftar Sekarang</p>
              </div>
            </button>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-80"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-modal-background shadow-xl rounded-md border-black border">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-bold leading-6 text-blue-title text-center"
                      >
                        Apakah Anda Yakin Ingin Mendaftar di Permainan Ini?
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-black text-center font-semibold">
                          Pastikan semua data yang telah anda masukan tidak ada
                          yang salah. Anda tidak bisa mengubah data setelah
                          perdaftaran tersimpan.
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          className="w-full h-10 bg-button-red-outer mb-1 rounded-sm p-1 flex items-center justify-center  ring-1 ring-black"
                          onClick={closeModal}
                        >
                          <div className="w-full h-full  bg-button-red-inner rounded-sm m-2 text-white font-semibold  ring-1 ring-black">
                            <p>Batal</p>
                          </div>
                        </button>
                        <button className="w-full h-10 bg-button-green-outer rounded-sm p-1 flex items-center justify-center  ring-1 ring-black">
                          <div className="w-full h-full  bg-hover-game-icon-inner rounded-sm m-2 text-white font-semibold  ring-1 ring-black">
                            <p>Simpan</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
