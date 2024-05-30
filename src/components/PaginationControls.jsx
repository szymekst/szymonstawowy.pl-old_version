"use client";

//Thanks to Josh tried codig --> https://youtu.be/SXmni_7B0r4?si=AodyoiGen6F6qkS2
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

const PaginationControls = ({
    currentPageProp,
    postsPerPageProp,
    numOfPages,
    hasPrevPage,
    hasNextPage,
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
                <div className="pt-[30px] pb-[50px] flex flex-col items-center gap-[20px] text-sm font-medium dark:text-white md:flex-row md:justify-between md:pt-[50px] md:pb-[60px] lg:py-[30px]">
                    <button
                        disabled={!hasPrevPage}
                        onClick={() => {
                            router.push(prevPagePath);
                        }}
                    >
                        ← Poprzednia
                    </button>
                    <div className="flex justify-center gap-[2px]">
                        {Array.from({ length: numOfPages }, (_, i) =>
                            numOfPages >= 8 ? (
                                <React.Fragment key={i}>
                                    {i < 3 ? (
                                        <button
                                            className={`${
                                                currentPage == i + 1 &&
                                                "pagination_button__active"
                                            } pagination_button`}
                                            onClick={() => {
                                                router.push(
                                                    `/blog/?currentPage=${
                                                        i + 1
                                                    }&postsPerPage=${postsPerPage}`
                                                );
                                            }}
                                        >
                                            {i + 1}
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                    {i === 4 ? (
                                        <div className="pagination_button">
                                            ...
                                        </div>
                                    ) : (
                                        ""
                                    )}

                                    {i >= numOfPages - 3 && i <= numOfPages ? (
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
                                                        }&postsPerPage=${postsPerPage}`
                                                    );
                                                }}
                                            >
                                                {i + 1}
                                            </button>
                                        </>
                                    ) : (
                                        ""
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
                                                }&postsPerPage=${postsPerPage}`
                                            );
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
                        onClick={() => {
                            router.push(nextPagePath);
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
