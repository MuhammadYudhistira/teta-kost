"use client";

import { useInView } from "@/hooks/useInView";
import { FC } from "react";

const VideoSection: FC = () => {
    const { ref, isInView } = useInView<HTMLDivElement>();

    return (
        <section className="py-20 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-[#222222] mb-4">
                        Experience TETA Kost
                    </h2>
                    <p className="text-xl text-[#717171] max-w-2xl mx-auto">
                        Jelajahi suasana kost kami melalui video tur virtual.
                        Kenali fasilitas, kamar, dan kenyamanan yang kami
                        tawarkan untuk tempat tinggal jangka panjang maupun
                        pendek Anda.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto" ref={ref}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                        {isInView && (
                            <video
                                className="w-full h-full object-contain"
                                controls
                                preload="metadata"
                                poster="/poster.jpg"
                            >
                                <source src="/profile.mp4" type="video/mp4" />
                            </video>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-[#717171] max-w-2xl mx-auto">
                            Temukan kenyamanan ruang privat dan fasilitas
                            penunjang di TETA Kost — pilihan ideal bagi Anda
                            yang mencari hunian praktis, bersih, dan strategis
                            di Padang.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
