import { modalState, movieState } from "@/atoms/modalAtoms";
import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typings";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useRecoilState } from "recoil";

interface Props {
  netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-[100%]">
        <Image
          priority
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="banner-img"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-sxl md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button className="bannerButton bg-[gray]/70"
         onClick={() => {
          setCurrentMovie(movie)
          setShowModal(true)
        }}>
        
          More Info <InformationCircleIcon className="w-5 h-5 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
