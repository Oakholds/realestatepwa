import React from "react";
import styled from "styled-components";
import Heroblog from "../../components/Heroblog/Heroabout";

const BlogContainer = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 40px;
  font-family: "Playfair Display", serif;
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  line-height: 1.8;
`;

const Header = styled.header`
  text-align: center;
  color: #2c3e50;
  padding-bottom: 20px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  color: #1a1a1a;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-top: 10px;
`;

const Content = styled.article`
  color: #444;
  padding: 20px 0;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #555;
`;

const Quote = styled.blockquote`
  font-size: 1.4rem;
  font-style: italic;
  color: #2c3e50;
  padding: 20px;
  background: #f4f4f4;
  border-left: 5px solid #3498db;
  margin: 30px 0;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  font-size: 1rem;
  color: #888;
`;

const BlogPost = () => {
  return (
    <div>
      <Heroblog />
    <BlogContainer>
      <Header>
        <Title>Luxury Living in Ikoyi: The Ultimate Address of Prestige</Title>
        <SubTitle>By Oak Homes Limited • March 2025</SubTitle>
      </Header>

      <HeroImage
        src="./res1(4).jpeg"
        alt="Luxury Home in Ikoyi"
      />

      <Content>
        <Paragraph>
          Nestled along the glistening waters of the Lagos Lagoon, **Ikoyi** has
          become synonymous with luxury, prestige, and exclusivity. It is the
          ultimate destination for high-net-worth individuals, celebrities, and
          global business moguls who seek the perfect blend of serenity and
          opulence.
        </Paragraph>

        <Paragraph>
          From breathtaking waterfront mansions to **architecturally stunning
          high-rise penthouses**, Ikoyi’s real estate market is a masterpiece of
          modern luxury. The area is home to some of the **most expensive**
          properties in Nigeria, offering unparalleled security, sophistication,
          and premium amenities.
        </Paragraph>

        <Quote>
          "Ikoyi is not just a place to live; it's a lifestyle, a statement of
          success and refined taste."
        </Quote>

        <h2>🏡 The Appeal of Ikoyi’s Luxury Properties</h2>

        <Paragraph>
          What makes Ikoyi the epitome of **premium real estate**? The answer is
          a combination of **strategic location, world-class infrastructure, and
          a high concentration of affluent residents**.
        </Paragraph>

        <ul>
          <li>🌆 **Prime Location** – Close proximity to Victoria Island and Lekki.</li>
          <li>🔒 **Unmatched Security** – 24/7 surveillance and gated communities.</li>
          <li>🌴 **Serene Environment** – Lush greenery and breathtaking waterfront views.</li>
          <li>🏗 **Architectural Masterpieces** – Stunning mansions, penthouses, and smart homes.</li>
          <li>💎 **Exclusive Lifestyle** – Fine dining, yacht clubs, private golf courses, and luxury shopping.</li>
        </ul>

        <h2>🌟 Smart & Sustainable Living</h2>

        <Paragraph>
          Today’s **luxury homes in Ikoyi** are designed with cutting-edge
          technology and sustainability in mind. Smart home automation systems
          allow residents to control lighting, temperature, and security at the
          touch of a button.
        </Paragraph>

        <Paragraph>
          Many properties incorporate **eco-friendly features** such as **solar
          panels, energy-efficient appliances, and green spaces**, ensuring a
          balance between luxury and environmental consciousness.
        </Paragraph>

        <h2>🏢 The Rise of High-Rise Penthouses</h2>

        <Paragraph>
          While traditional mansions remain highly desirable, there has been a
          **significant shift towards high-rise luxury apartments** in Ikoyi.
          Developers are investing in ultra-modern residential towers that
          offer panoramic views of the Lagos skyline and waterfront.
        </Paragraph>

        <Quote>
          "Luxury in Ikoyi is not just about space; it’s about experiencing
          breathtaking views from the sky."
        </Quote>

        <h2>🌎 A Global Hub for Investors</h2>

        <Paragraph>
          **Ikoyi's real estate market** attracts both local and international
          investors due to its **high rental yield and property appreciation**.
          Many expatriates and multinational companies prefer Ikoyi for their
          executives, making it a **lucrative investment option**.
        </Paragraph>

        <h2>🚀 The Future of Ikoyi’s Luxury Market</h2>

        <Paragraph>
          As Lagos continues to evolve into a **global megacity**, Ikoyi remains
          at the forefront of **luxurious urban living**. With new
          developments, private islands, and ultra-exclusive communities on the
          rise, the demand for premium properties in Ikoyi will only continue to
          grow.
        </Paragraph>

        <Quote>
          "Owning a home in Ikoyi is more than an investment; it’s an entry into
          an elite circle of prestige and timeless elegance."
        </Quote>
      </Content>

      <Footer>
        <p>Interested in owning a luxury home in Ikoyi? 🌟 Contact Oak Homes Limited today.</p>
      </Footer>
    </BlogContainer>
    </div>
  );
};

export default BlogPost;
