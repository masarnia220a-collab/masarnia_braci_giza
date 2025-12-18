"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10); // must be > 3.2 + 1s exit

    return () => clearTimeout(timer);
  }, []);
  const overlayVariant = {
    hidden: {
      y: "0%",
    },
    visible: {
      y: "0%",
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 1,
        ease: EASE_IN_OUT,
        delay: 2.2, // 👈 after EVERYTHING finishes
      },
    },
  };

  const partsVariant = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASE_OUT,
        delay: 0.4, // 👈 AFTER ICONS
      },
    },
  };

  const bgVariant = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: EASE_OUT,
        delay: 0.8,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: EASE_OUT,
        delay: 1.2,
      },
    },
  };

  const iconLeftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: EASE_OUT,
      },
    },
  };

  const iconRightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: EASE_OUT,
      },
    },
  };

  /**
   * Controls sequence:
   * 1️⃣ Icons
   * 2️⃣ Logo
   */
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={overlayVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-soft flex flex-col"
        >
          <div className="fixed inset-0 pointer-events-none z-50">
            <motion.div
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              className="fixed inset-0 pointer-events-none z-50"
            >
              {/* LEFT ICONS */}
              <motion.div
                variants={iconLeftVariant}
                className="fixed top-[5vh] left-[20vw]"
              >
                <Image src="/tasak.png" height={170} width={215} alt="tasak" />
              </motion.div>

              <motion.div
                variants={iconLeftVariant}
                className="fixed bottom-[10vh] left-[5vw]"
              >
                <Image
                  src="/galazkaZiol.png"
                  height={137}
                  width={250}
                  alt="Gałązka ziół"
                  className="max-[800px]:hidden"
                />
              </motion.div>

              {/* RIGHT ICONS */}
              <motion.div
                variants={iconRightVariant}
                className="fixed top-[10vh] right-[20vw]"
              >
                <Image
                  src="/czosnek.png"
                  height={180}
                  width={161}
                  alt="Czosnek"
                  className="max-[800px]:hidden"
                />
              </motion.div>

              <motion.div
                variants={iconRightVariant}
                className="fixed bottom-[20vh] max-[700px]:bottom-[5vh] right-[5vw]"
              >
                <Image
                  src="/szynka.png"
                  height={137}
                  width={250}
                  alt="Szynka"
                  className=""
                />
              </motion.div>
            </motion.div>
          </div>

          {/* LOGO */}
          <div className="w-[300px] h-auto">
            <svg
              width="300"
              height="300"
              viewBox="0 0 72 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* DA GREEN BACKGROUND */}
              <motion.g variants={bgVariant} initial="hidden" animate="visible">
                <rect
                  x="11.4258"
                  y="8.56885"
                  width="49.985"
                  height="49.9849"
                  rx="24.9924"
                  fill="#307E41"
                />
              </motion.g>

              <rect
                x="58.8398"
                y="32.5051"
                width="12.2052"
                height="0.335539"
                fill="black"
              />
              <rect
                x="12.5625"
                y="32.8643"
                width="12.2052"
                height="0.335539"
                transform="rotate(-180 12.5625 32.8643)"
                fill="black"
              />
              {/* BOTTOM RIGHT */}
              <motion.g
                variants={partsVariant}
                initial="hidden"
                animate="visible"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.6914 55.7202C39.5081 44.7733 59.7033 32.1067 58.8435 32.7358L71.4052 32.6729L70.0421 33.9312C70.5524 35.9234 70.8851 40.2309 67.966 41.6905C52.9297 48.2754 46.5544 61.5712 46.5544 61.5712C44.8348 64.0458 40.1652 64.5071 37.5998 64.5491L35.6914 65.3669V55.7202ZM36.9497 58.9707V62.431C36.9497 62.431 37.7885 62.6617 40.7454 62.431C43.7024 62.2003 44.0589 60.5645 49.9098 52.6165C54.5906 46.258 62.4296 41.5856 66.1205 40.0757C69.9792 37.1817 67.5885 33.7424 65.4914 33.7424H62.9329C55.2784 35.7347 37.6837 51.2114 36.9497 58.9707Z"
                  fill="black"
                />
                <path
                  d="M66.3512 36.7623C63.6249 36.993 62.4925 37.4963 56.7674 41.5647C52.7829 44.2699 44.1637 50.3726 40.2421 60.8372C40.2421 60.8372 38.6483 61.3615 38.2918 60.9211C37.9353 60.4807 41.6178 50.2258 53.3281 41.334C65.0384 32.4422 66.8894 34.5813 66.3512 36.7623Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.9497 62.431V58.9707C37.6837 51.2114 55.2784 35.7347 62.9329 33.7424H65.4914C67.5885 33.7424 69.9792 37.1817 66.1205 40.0757C62.4296 41.5856 54.5906 46.258 49.9098 52.6165C44.0589 60.5645 43.7024 62.2003 40.7454 62.431C37.7885 62.6617 36.9497 62.431 36.9497 62.431ZM56.7674 41.5647C62.4925 37.4963 63.6249 36.993 66.3512 36.7623C66.8894 34.5813 65.0384 32.4422 53.3281 41.334C41.6178 50.2258 37.9353 60.4807 38.2918 60.9211C38.6483 61.3615 40.2421 60.8372 40.2421 60.8372C44.1637 50.3726 52.7829 44.2699 56.7674 41.5647Z"
                  fill="#A51B31"
                />
              </motion.g>
              {/* TOP RIGHT */}
              <motion.g
                variants={partsVariant}
                initial="hidden"
                animate="visible"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.6914 9.64674C39.5081 20.5937 59.7033 33.2603 58.8435 32.6311L71.4052 32.694L70.0421 31.4358C70.5524 29.4435 70.8851 25.136 67.966 23.6764C52.9297 17.0915 46.5544 3.79578 46.5544 3.79578C44.8348 1.32118 40.1652 0.859818 37.5998 0.817875L35.6914 0V9.64674ZM36.9497 6.39621V2.93596C36.9497 2.93596 37.7885 2.70528 40.7454 2.93596C43.7024 3.16665 44.0589 4.8024 49.9098 12.7505C54.5906 19.1089 62.4296 23.7813 66.1205 25.2912C69.9792 28.1852 67.5885 31.6245 65.4914 31.6245H62.9329C55.2784 29.6323 37.6837 14.1555 36.9497 6.39621Z"
                  fill="black"
                />
                <path
                  d="M66.3512 28.6047C63.6249 28.374 62.4925 27.8707 56.7674 23.8023C52.7829 21.097 44.1637 14.9944 40.2421 4.52977C40.2421 4.52977 38.6483 4.00549 38.2918 4.44589C37.9353 4.88628 41.6178 15.1412 53.3281 24.033C65.0384 32.9247 66.8894 30.7857 66.3512 28.6047Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.9497 2.93596V6.39621C37.6837 14.1555 55.2784 29.6323 62.9329 31.6245H65.4914C67.5885 31.6245 69.9792 28.1852 66.1205 25.2912C62.4296 23.7813 54.5906 19.1089 49.9098 12.7505C44.0589 4.8024 43.7024 3.16665 40.7454 2.93596C37.7885 2.70528 36.9497 2.93596 36.9497 2.93596ZM56.7674 23.8023C62.4925 27.8707 63.6249 28.374 66.3512 28.6047C66.8894 30.7857 65.0384 32.9247 53.3281 24.033C41.6178 15.1412 37.9353 4.88628 38.2918 4.44589C38.6483 4.00549 40.2421 4.52977 40.2421 4.52977C44.1637 14.9944 52.7829 21.097 56.7674 23.8023Z"
                  fill="#A51B31"
                />
              </motion.g>
              {/* LETTER PATH */}
              <motion.path
                variants={letterVariant}
                initial="hidden"
                animate="visible"
                d="M45.129 32.9672V34.6868C43.9046 34.6868 43.3742 35.5816 43.2621 36.029V42.2155C40.3262 43.91 36.5025 44.2357 34.9576 44.1868C29.7777 43.5996 27.7227 40.6217 26.8418 39.0698C26.2756 37.8954 24.938 34.1793 26.2969 29.465C27.6559 24.7507 32.2737 23.1108 34.4128 22.8801C34.4407 22.8591 34.8909 22.8298 36.4679 22.8801C38.4391 22.943 40.4315 24.3481 40.7251 24.411C40.9599 24.4613 41.2423 23.7749 41.3542 23.4253H43.0109V30.4507H41.3542C40.7334 28.32 39.4598 26.6549 38.9006 26.0887C38.6699 25.7601 37.743 25.0695 35.8807 24.9352C34.0185 24.801 32.4764 26.5151 31.9381 27.3889C31.4208 28.2767 30.4534 31.0001 30.7218 34.7917C30.9902 38.5833 32.4974 40.5937 33.2174 41.125C35.9352 42.853 38.2644 41.845 39.0893 41.125V35.7354C38.9551 35.014 37.9429 34.8057 37.4535 34.7917H36.4679V33.0301L45.129 32.9672Z"
                fill="#A51B31"
                stroke="white"
                strokeWidth="0.2"
              />

              {/* TOP LEFT */}
              <motion.g
                variants={partsVariant}
                initial="hidden"
                animate="visible"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.7129 9.64918C31.8961 20.5961 11.701 33.2627 12.5608 32.6336L-0.000919443 32.6965L1.3622 31.4382C0.851906 29.446 0.519166 25.1385 3.43835 23.6789C18.4746 17.0939 24.8499 3.79822 24.8499 3.79822C26.5695 1.32362 31.2391 0.862259 33.8045 0.820317L35.7129 0.00244141V9.64918ZM34.4546 6.39865V2.9384C34.4546 2.9384 33.6158 2.70772 30.6589 2.9384C27.7019 3.16909 27.3454 4.80484 21.4945 12.7529C16.8137 19.1114 8.97472 23.7837 5.2838 25.2937C1.42512 28.1877 3.81582 31.627 5.91294 31.627H8.47141C16.1259 29.6347 33.7206 14.158 34.4546 6.39865Z"
                  fill="black"
                />
                <path
                  d="M5.05312 28.6071C7.77937 28.3764 8.91181 27.8731 14.6369 23.8047C18.6214 21.0994 27.2406 14.9968 31.1622 4.53221C31.1622 4.53221 32.756 4.00793 33.1125 4.44833C33.469 4.88872 29.7865 15.1436 18.0762 24.0354C6.36591 32.9272 4.51486 30.7881 5.05312 28.6071Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.4546 2.9384V6.39865C33.7206 14.158 16.1259 29.6347 8.47141 31.627H5.91294C3.81582 31.627 1.42512 28.1877 5.2838 25.2937C8.97472 23.7837 16.8137 19.1114 21.4945 12.7529C27.3454 4.80484 27.7019 3.16909 30.6589 2.9384C33.6158 2.70772 34.4546 2.9384 34.4546 2.9384ZM14.6369 23.8047C8.91181 27.8731 7.77937 28.3764 5.05312 28.6071C4.51486 30.7881 6.36591 32.9272 18.0762 24.0354C29.7865 15.1436 33.469 4.88872 33.1125 4.44833C32.756 4.00793 31.1622 4.53221 31.1622 4.53221C27.2406 14.9968 18.6214 21.0994 14.6369 23.8047Z"
                  fill="#A51B31"
                />
              </motion.g>
              {/* BOTTOM LEFT */}
              <motion.g
                variants={partsVariant}
                initial="hidden"
                animate="visible"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.7129 55.7226C31.8961 44.7757 11.701 32.1091 12.5608 32.7382L-0.000919443 32.6753L1.3622 33.9336C0.851906 35.9259 0.519166 40.2333 3.43835 41.6929C18.4746 48.2779 24.8499 61.5736 24.8499 61.5736C26.5695 64.0482 31.2391 64.5096 33.8045 64.5515L35.7129 65.3694V55.7226ZM34.4546 58.9732V62.4334C34.4546 62.4334 33.6158 62.6641 30.6589 62.4334C27.7019 62.2027 27.3454 60.567 21.4945 52.6189C16.8137 46.2605 8.97472 41.5881 5.2838 40.0782C1.42512 37.1841 3.81582 33.7449 5.91294 33.7449H8.47141C16.1259 35.7371 33.7206 51.2138 34.4546 58.9732Z"
                  fill="black"
                />
                <path
                  d="M5.05312 36.7647C7.77937 36.9954 8.91181 37.4987 14.6369 41.5671C18.6214 44.2724 27.2406 50.375 31.1622 60.8396C31.1622 60.8396 32.756 61.3639 33.1125 60.9235C33.469 60.4831 29.7865 50.2282 18.0762 41.3364C6.36591 32.4447 4.51486 34.5837 5.05312 36.7647Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.4546 62.4334V58.9732C33.7206 51.2138 16.1259 35.7371 8.47141 33.7449H5.91294C3.81582 33.7449 1.42512 37.1841 5.2838 40.0782C8.97472 41.5881 16.8137 46.2605 21.4945 52.6189C27.3454 60.567 27.7019 62.2027 30.6589 62.4334C33.6158 62.6641 34.4546 62.4334 34.4546 62.4334ZM14.6369 41.5671C8.91181 37.4987 7.77937 36.9954 5.05312 36.7647C4.51486 34.5837 6.36591 32.4447 18.0762 41.3364C29.7865 50.2282 33.469 60.4831 33.1125 60.9235C32.756 61.3639 31.1622 60.8396 31.1622 60.8396C27.2406 50.375 18.6214 44.2724 14.6369 41.5671Z"
                  fill="#A51B31"
                />
              </motion.g>
            </svg>
          </div>
          {/* TEXT */}
          {/* TEXT */}
          <div className="mt-8 flex items-baseline gap-3 text-center">
            {/* MASARNIA */}
            <motion.span
              variants={partsVariant}
              initial="hidden"
              animate="visible"
              className="text-[32px] font-semibold tracking-wide text-black"
            >
              Masarnia
            </motion.span>

            {/* BRACI */}
            <motion.span
              variants={bgVariant}
              initial="hidden"
              animate="visible"
              className="text-[32px] font-medium tracking-wide text-black"
            >
              Braci
            </motion.span>

            {/* GIŻA */}
            <motion.span
              variants={letterVariant}
              initial="hidden"
              animate="visible"
              className="text-[32px] font-bold tracking-wide text-brand-red"
            >
              Giża
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
