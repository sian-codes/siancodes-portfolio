import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";

interface BandImage {
    img: string;
    title: string;
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export default function AnimatedImageBand({
                                              images,
                                              height = 95,
                                              speedSeconds = 50, // higher = slower loop
                                          }: {
    images: BandImage[];
    height?: number;
    speedSeconds?: number;
}) {
    // duplicate list so the animation can loop seamlessly
    const loopImages = [...images, ...images];

    return (
        <Box sx={{ mt: 2, overflow: "hidden", width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    width: "max-content",
                    animation: `${scroll} ${speedSeconds}s linear infinite`,
                }}
            >
                {loopImages.map((item, i) => (
                    <Box
                        key={`${item.title}-${i}`}
                        component="img"
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        sx={{
                            width: height * 1.2,
                            height,
                            objectFit: "cover",
                            display: "block",
                            mx: 0.5,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
