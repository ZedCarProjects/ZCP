import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { projects } from '../../data/projects.js';

function FeaturedProjectsSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }}
      className="!pb-10"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <Link
            to="/projects"
            className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-zcp-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
          >
            <article className="card-surface h-full overflow-hidden rounded-2xl">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 flex flex-col gap-1">
                  <span className="inline-flex w-fit rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-zcp-yellow">
                    {project.category}
                  </span>
                  <p className="text-xs text-gray-300">{project.location}</p>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-2 text-sm">
                <h3 className="font-display text-lg font-semibold">{project.name}</h3>
                <p className="text-xs text-gray-400">Owned by {project.owner}</p>
                <p className="text-xs text-gray-300 line-clamp-3">{project.summary}</p>
              </div>
            </article>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FeaturedProjectsSlider;
