import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const MainSection = () => {
  // Testimonial data for mapping
  const testimonials = [
    {
      name: "Felicity Moon",
      role: "HR Manager",
      image:
        "https://c.animaapp.com/GE76jvoD/img/a-professional-woman-with-shoulder-length-brown-hair-sitting-at-@2x.png",
      quote: "Remunera has transformed our payroll process.",
      lineContainer: "https://c.animaapp.com/GE76jvoD/img/line-container-4.svg",
    },
    {
      name: "Gideon Frost",
      role: "CEO",
      image:
        "https://c.animaapp.com/GE76jvoD/img/a-confident-business-professional-in-a-modern-office-setting--sm@2x.png",
      quote: "Efficient and reliable software.",
      lineContainer: "https://c.animaapp.com/GE76jvoD/img/line-container-3.svg",
    },
    {
      name: "Seraphina Vale",
      role: "Finance Director",
      image:
        "https://c.animaapp.com/GE76jvoD/img/a-professional-woman-in-a-tailored-suit-smiling-confidently-whil@2x.png",
      quote: "A must-have for any growing business.",
      lineContainer: "https://c.animaapp.com/GE76jvoD/img/line-container-4.svg",
    },
    {
      name: "Thorne Ashford",
      role: "Operations Manager",
      image:
        "https://c.animaapp.com/GE76jvoD/img/a-professional-woman-with-short-hair-wearing-a-blazer--smiling-c@2x.png",
      quote: "User-friendly and powerful features.",
      lineContainer: "https://c.animaapp.com/GE76jvoD/img/line-container-3.svg",
    },
    {
      name: "Lysandra Quill",
      role: "IT Manager",
      image:
        "https://c.animaapp.com/GE76jvoD/img/a-woman-with-shoulder-length-brown-hair-working-on-a-laptop-in-a@2x.png",
      quote: "Great support and seamless integration.",
      lineContainer: "https://c.animaapp.com/GE76jvoD/img/line-container-4.svg",
    },
    {
      name: "Dorian Black",
      role: "Chief Accountant",
      image:
        "https://c.animaapp.com/GE76jvoD/img/a-professional-man-in-a-navy-suit-sitting-at-a-desk-with-a-lapto@2x.png",
      quote: "Our go-to solution for payroll.",
      lineContainer: "/img/line-container.svg",
    },
  ];

  return (
    <Box py={12} zIndex={1} width="100%" display="flex" alignItems="flex-start">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        flexGrow={1}
      >
        {/* Hero Section */}
        <Box width="100%" height="1398px" zIndex={2} bgcolor="#0d0402">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="32px"
            pt={24}
            pb={0}
            px={24}
            sx={{
              position: "relative",
              left: "-24px",
              width: "1536px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(13.16,4.09,2.14,0.7) 31.17%, rgba(112.2,19.8,0,0.11) 100%)",
            }}
          >
            <Stack alignItems="center" spacing={24} width="100%">
              <Typography
                variant="h1"
                color="secondary"
                textAlign="center"
                sx={{
                  mt: "-1px",
                  fontFamily: "'Roboto_Serif', Helvetica",
                  fontWeight: 700,
                  fontSize: "120px",
                  letterSpacing: "-2.40px",
                  lineHeight: "120px",
                }}
              >
                Simplify Your Payroll and Benefits Management
              </Typography>

              <Button
                variant="contained"
                sx={{
                  px: 6,
                  py: 3,
                  bgcolor: "#ff5733",
                  borderRadius: "8px",
                  fontFamily: "'Public_Sans', Helvetica",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "24px",
                  color: "#050000",
                }}
              >
                Get Started
              </Button>
            </Stack>

            <Box width="100%" height="500px" position="relative">
              <Box
                sx={{
                  position: "relative",
                  width: "1027px",
                  height: "723px",
                  top: "5px",
                  left: "158px",
                  bgcolor: "black",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1.5px solid #b5979033",
                  boxShadow:
                    "0px 12px 27px #00000008, 0px 50px 50px #00000008, 0px 112px 67px #00000005, 0px 199px 80px transparent, 0px 311px 87px transparent",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "729px",
                    height: "271px",
                    top: "106px",
                    left: "40px",
                    bgcolor: "#e4d9d74c",
                    borderRadius: "16px",
                    opacity: 0.3,
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    width: "729px",
                    height: "271px",
                    top: "409px",
                    left: "40px",
                    bgcolor: "#e4d9d74c",
                    borderRadius: "16px",
                    opacity: 0.3,
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    width: "183px",
                    height: "574px",
                    top: "106px",
                    left: "801px",
                    bgcolor: "#e4d9d74c",
                    borderRadius: "16px",
                    opacity: 0.3,
                  }}
                />

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                  sx={{
                    position: "absolute",
                    top: "37px",
                    left: "40px",
                    height: "48px",
                  }}
                >
                  <Box
                    component="img"
                    src="https://c.animaapp.com/GE76jvoD/img/logomark-1.svg"
                    alt="Logomark"
                    width="42px"
                    height="42px"
                  />

                  <Typography
                    sx={{
                      fontFamily: "'Sen', Helvetica",
                      fontWeight: 700,
                      fontSize: "42px",
                      color: "#ff5733",
                      letterSpacing: "-1.68px",
                      lineHeight: "42px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Remunera
                  </Typography>
                </Stack>

                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    top: "37px",
                    left: "760px",
                    px: 4,
                    py: 3,
                    bgcolor: "#ff5733",
                    borderRadius: "8px",
                    fontFamily: "'Public_Sans', Helvetica",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#050000",
                  }}
                >
                  Explore our features
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Feature Sections */}
        <Box width="100%">
          {/* Efficient Payroll Section */}
          <Box
            display="flex"
            alignItems="center"
            gap={24}
            py={12}
            width="100%"
            height="720px"
            bgcolor="#0d0402"
          >
            <Box display="flex" flexDirection="column" gap={8} flexGrow={1}>
              <Stack spacing={4} width="100%">
                <Typography
                  variant="h2"
                  color="secondary"
                  sx={{
                    mt: "-1px",
                    fontFamily: "'Roboto_Serif', Helvetica",
                    fontWeight: 700,
                    fontSize: "40px",
                    letterSpacing: "-0.96px",
                    lineHeight: "52px",
                  }}
                >
                  Efficient Payroll
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="secondary"
                  sx={{
                    fontFamily: "'Public_Sans', Helvetica",
                    fontWeight: 400,
                    fontSize: "24px",
                    letterSpacing: "-0.12px",
                    lineHeight: "32px",
                  }}
                >
                  Automate payroll processing with ease
                </Typography>
              </Stack>
            </Box>

            <Box
              component="img"
              src="https://c.animaapp.com/GE76jvoD/img/ui-snippet.svg"
              alt="Ui snippet"
              width="624px"
              height="469px"
            />
          </Box>

          {/* Comprehensive Benefits Section */}
          <Box
            display="flex"
            alignItems="center"
            gap={24}
            py={12}
            width="100%"
            height="720px"
            bgcolor="#0d0402"
          >
            <Box
              component="img"
              src="https://c.animaapp.com/GE76jvoD/img/ui-snippet-1.svg"
              alt="Ui snippet"
              width="624px"
              height="469px"
            />

            <Box display="flex" flexDirection="column" gap={8} flexGrow={1}>
              <Stack spacing={4} width="100%">
                <Typography
                  variant="h2"
                  color="secondary"
                  sx={{
                    mt: "-1px",
                    fontFamily: "'Roboto_Serif', Helvetica",
                    fontWeight: 700,
                    fontSize: "40px",
                    letterSpacing: "-0.96px",
                    lineHeight: "52px",
                  }}
                >
                  Comprehensive Benefits
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="secondary"
                  sx={{
                    fontFamily: "'Public_Sans', Helvetica",
                    fontWeight: 400,
                    fontSize: "24px",
                    letterSpacing: "-0.12px",
                    lineHeight: "32px",
                  }}
                >
                  Manage employee benefits effortlessly
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Testimonials Section */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={12}
          py={12}
          width="100%"
          bgcolor="#0d0402"
          zIndex={0}
        >
          <Typography
            variant="h2"
            color="secondary"
            textAlign="center"
            sx={{
              mt: "-1.5px",
              fontFamily: "'Roboto_Serif', Helvetica",
              fontWeight: 700,
              fontSize: "40px",
              letterSpacing: "-0.96px",
              lineHeight: "52px",
            }}
          >
            Trusted by businesses worldwide
          </Typography>

          <Box
            display="flex"
            gap={6}
            width="100%"
            overflow="hidden"
            position="relative"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                sx={{
                  width: "288px",
                  p: 6,
                  bgcolor: "#e0beb71f",
                  borderRadius: "16px",
                  border: "1.5px solid transparent",
                  overflow: "hidden",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Stack spacing={4}>
                    <Stack
                      direction="row"
                      spacing={3}
                      alignItems="center"
                      width="100%"
                    >
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                      <Stack>
                        <Typography
                          sx={{
                            fontFamily: "'Public_Sans', Helvetica",
                            fontWeight: 700,
                            fontSize: "15px",
                            color: "#e4d9d7",
                            letterSpacing: "-0.07px",
                            lineHeight: "20px",
                            mt: "-1px",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Public_Sans', Helvetica",
                            fontWeight: 400,
                            fontSize: "15px",
                            color: "#ebd5d09e",
                            letterSpacing: "-0.07px",
                            lineHeight: "20px",
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Box
                      display="flex"
                      gap={3}
                      pb={2}
                      width="100%"
                      sx={{ opacity: 0.8 }}
                    >
                      <Box
                        component="img"
                        src={testimonial.lineContainer}
                        alt="Line container"
                        width="48px"
                        alignSelf="stretch"
                      />
                      <Typography
                        sx={{
                          flexGrow: 1,
                          mt: "-1px",
                          fontFamily: "'Public_Sans', Helvetica",
                          fontWeight: 400,
                          fontSize: "20px",
                          color: "#e4d9d7",
                          letterSpacing: "-0.10px",
                          lineHeight: "24px",
                        }}
                      >
                        {testimonial.quote}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box
            sx={{
              position: "absolute",
              width: "96px",
              height: "388px",
              top: 0,
              left: "1248px",
              transform: "rotate(180deg)",
              background:
                "linear-gradient(180deg, rgba(13.16,4.09,2.14,0) 0%, rgb(13.16,4.09,2.14) 84%)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
