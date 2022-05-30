import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const ReviewDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 max-w-xl mt-10 space-y-1">
        <div className="border-2 px-3 rounded-lg py-4">
          <div className="flex items-center space-x-3 ">
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
          <div className="my-5 space-y-5 px-4">
            {[1, 2, 3, 4, 5].map((i, _) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-slate-200" />
                <div>
                  <span className="block text-sm font-medium text-gray-700">
                    username
                  </span>
                  <span className="block text-xs text-gray-500 ">
                    createdAt
                  </span>
                  <p className="mt-2 text-gray-700">answer</p>
                </div>
              </div>
            ))}
          </div>
          <form className="px-4">
            <TextArea
              name="description"
              placeholder="コメントを入力する"
              required
            />
            <button className="mt-2 w-full rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ">
              送信
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewDetail;