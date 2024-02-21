import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
        <div className="card w-96 h-96 bg-base-200 shadow-xl">
            <SkeletonTheme baseColor="#606060" highlightColor="#222">
              <figure className="px-10 py-10">
                <Skeleton circle={true} height={150} width={150}></Skeleton>
              </figure>
              <div className="text-center">
                <h2 className="px-10 pb-5 font-bold text-3xl text-center">
                  <Skeleton />
                </h2>
                <p className="px-10 text-center text-xl">
                  <Skeleton count={2} />
                </p>
              </div>
            </SkeletonTheme>
          </div>
    );
};

export default SkeletonCard;