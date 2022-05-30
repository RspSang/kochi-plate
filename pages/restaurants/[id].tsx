import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const RestaurantDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 max-w-xl mt-6 space-y-1">
        <div className="pb-4">
          <div className="px-3 py-4 space-x-6">
            <span className="text-4xl font-semibold">Sushiro</span>
            <span className="text-orange-500 text-3xl">3.8</span>
          </div>
          <div className="flex overflow-x-scroll relative space-x-2">
            {[1, 2, 3, 4].map(() => (
              <div>
                <div className="h-44 w-44 rounded-2xl bg-slate-500" />
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 border-t-2">
          <div className="flex justify-around">
            <div className="flex items-center content-center flex-col cursor-pointer hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span className="text-sm">行きたい</span>
            </div>
            <div className="flex items-center content-center flex-col cursor-pointer hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm">行ってきた</span>
            </div>
            <div className="flex items-center content-center flex-col cursor-pointer hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <span className="text-sm">レビューを書く</span>
            </div>
          </div>
        </div>
        <div className="py-4 border-t-2">
          <div className="space-y-2">
            <span className="font-semibold text-lg">
              高知県高知市〇〇町11-11
            </span>
            <div className="bg-slate-500 rounded-2xl w-full h-60" />
          </div>
        </div>
        <div className="py-4 border-t-2">
          <div className="space-y-2">
            <span className="font-semibold text-lg">お店の情報</span>
            <div className="space-y-[1px] text-slate-700">
              <div className="flex justify-between">
                <span>営業時間</span>
                <span>10:00 ~ 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>休日</span>
                <span>なし</span>
              </div>
              <div className="flex justify-between">
                <span>値段</span>
                <span>500円 ~ 2000円/一人</span>
              </div>
              <div className="flex justify-between">
                <span>種類</span>
                <span>和食</span>
              </div>
              <div className="flex justify-between">
                <span>駐車場</span>
                <span>有り</span>
              </div>
            </div>
          </div>
        </div>
        <Link href={"/reviews/1"}>
          <a>
            <div className="border-t-2">
              <div className="flex items-center mt-4 space-x-3 ">
                <div className="w-12 h-12 bg-slate-500 rounded-full" />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">Steve Jebs</span>
                  <div className="text-slate-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span className="pl-1">2</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 px-3 pb-4">
                <span>i love this place!</span>
              </div>
              <div className="flex overflow-x-scroll relative space-x-2">
                {[1, 2, 3, 4].map(() => (
                  <div>
                    <div className="h-36 w-36 rounded-2xl bg-slate-500" />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex w-full space-x-5 border-t px-4 py-2.5 text-gray-700">
                <span className="flex items-center space-x-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span>いいね 1</span>
                </span>
                <span className="flex items-center space-x-2 text-sm">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>コメント 1</span>
                </span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default RestaurantDetail;