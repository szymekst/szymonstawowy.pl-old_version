"use client";

//Thanks to Josh tried codig --> https://youtu.be/SXmni_7B0r4?si=AodyoiGen6F6qkS2
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

const scrollToId = (to) => {
    let whereToScroll = document.getElementById(to);
    window.scrollTo({
        top: whereToScroll.offsetTop,
        left: 0,
        behavior: "smooth",
    });
};

const PaginationControls = ({
    currentPageProp,
    postsPerPageProp,
    numOfPages,
    hasPrevPage,
    hasNextPage,
    to,
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = searchParams.get("currentPage") ?? currentPageProp;
    const postsPerPage = searchParams.get("postPerPage") ?? postsPerPageProp;

    const prevPagePath = `/blog/?currentPage=${
        Number(currentPage) - 1
    }&postsPerPage=${postsPerPage}`;

    const nextPagePath = `/blog/?currentPage=${
        Number(currentPage) + 1
    }&postsPerPage=${postsPerPage}`;

    return (
        <div>
            {numOfPages > 1 ? (
                <div className="pt-8 pb-12 flex flex-col items-center gap-5 text-sm font-medium dark:text-white md:flex-row md:justify-between md:pt-12 md:pb-16 lg:py-8">
                    <button
                        disabled={!hasPrevPage}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push(prevPagePath, { scroll: false });
                            scrollToId(to);
                        }}
                    >
                        ← Poprzednia
                    </button>
                    <div className="flex justify-center gap-[2px]">
                        {Array.from({ length: numOfPages }, (_, i) =>
                            numOfPages >= 8 ? (
                                <React.Fragment key={i}>
                                    {i < 3 && (
                                        <button
                                            className={`${
                                                currentPage == i + 1 &&
                                                "pagination_button__active"
                                            } pagination_button`}
                                            onClick={() => {
                                                router.push(
                                                    `/blog/?currentPage=${
                                                        i + 1
                                                    }&postsPerPage=${postsPerPage}`,
                                                    { scroll: false }
                                                );
                                                scrollToId(to);
                                            }}
                                        >
                                            {i + 1}
                                        </button>
                                    )}
                                    {i === 4 && (
                                        <div className="pagination_button">
                                            ...
                                        </div>
                                    )}
                                    {i >= numOfPages - 3 && i <= numOfPages && (
                                        <>
                                            <button
                                                className={`${
                                                    currentPage == i + 1 &&
                                                    "pagination_button__active"
                                                } pagination_button`}
                                                onClick={() => {
                                                    router.push(
                                                        `/blog/?currentPage=${
                                                            i + 1
                                                        }&postsPerPage=${postsPerPage}`,
                                                        { scroll: false }
                                                    );
                                                    scrollToId(to);
                                                }}
                                            >
                                                {i + 1}
                                            </button>
                                        </>
                                    )}
                                </React.Fragment>
                            ) : (
                                <React.Fragment key={i}>
                                    <button
                                        className={`${
                                            currentPage == i + 1 &&
                                            "pagination_button__active"
                                        } pagination_button`}
                                        onClick={() => {
                                            router.push(
                                                `/blog/?currentPage=${
                                                    i + 1
                                                }&postsPerPage=${postsPerPage}`,
                                                { scroll: false }
                                            );
                                            scrollToId(to);
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                </React.Fragment>
                            )
                        )}
                    </div>
                    <button
                        disabled={!hasNextPage}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push(nextPagePath, { scroll: false });
                            scrollToId(to);
                        }}
                    >
                        Nastepna →
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default PaginationControls;
