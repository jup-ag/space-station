import React, { useState } from 'react';

interface ProductCardProps {
    image: React.ReactNode;
    title: string;
    description: string;
};

const Subtitle = () => (
    <p style={{ color: 'grey', fontSize: '18px', marginBottom: '2rem' }}>
        Learn how to integrate Jupiter in various methods and leverage the power of our products.
    </p>
);

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={link}
            style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            margin: '10px',
            boxShadow: isHovered ? '0 0 10px darkseagreen' : '0 2px 5px rgba(0, 0, 0, 0.1)', // Change shadow on hover
            textAlign: 'left',
            minHeight: '120px',
            textDecoration: 'none',
            color: 'inherit',
            }}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
        <div style={{ marginRight: '10px', alignSelf: 'center' }}>
            <div
                style={{
                    marginRight: '10px',
                    alignSelf: 'center',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {image}
            </div>
        </div>
        <div style={{ alignItems: 'center' }}>
                <h3 style={{ margin: '0.5rem 0', fontSize: '20px' }}>{title}</h3>
                <p style={{ margin: '0', fontSize: '16px' }}>{description}</p>
        </div>
        </a>
    );
};

const ProductList = () => {
    return (
        <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Browse by Product</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '1200px',
            }}>
                <div style={{ flex: '1 1 calc(50% - 10px)', margin: '5px', minWidth: '300px' }}>
                    <ProductCard
                        image={<img src="/docslanding/swap.svg" alt="Swap" style={{ width: '60px', height: '60px' }} />}
                        title="Swap API"
                        description="Integrate Swap to access Solana's deep liquidity."
                        link="/docs/swap-api/get-quote"
                    />
                </div>
                <div style={{ flex: '1 1 calc(50% - 10px)', margin: '5px', minWidth: '300px' }}>
                    <ProductCard
                        image={<img src="/docslanding/perp.svg" alt="Perp" style={{ width: '60px', height: '60px' }} />}
                        title="Perp API"
                        description="Coming soon!"
                        link="/docs/perp-api/perp-api"
                    />
                </div>
                <div style={{ flex: '1 1 calc(50% - 10px)', margin: '5px', minWidth: '300px' }}>
                    <ProductCard
                        image={<img src="/docslanding/kit.svg" alt="Tool Kits" style={{ width: '60px', height: '60px' }} />}
                        title="Tool Kits"
                        description="Leverage open source tool kits to develop apps efficiently."
                        link="/docs/tool-kits/swap-terminal"
                    />
                </div>
                <div style={{ flex: '1 1 calc(50% - 10px)', margin: '5px', minWidth: '300px' }}>
                    <ProductCard
                        image={<img src="/docslanding/more.svg" alt="More" style={{ width: '60px', height: '60px' }} />}
                        title="More"
                        description="Explore other APIs or SDKs."
                        link="/docs/other-tools/price-api"
                    />
                </div>
            </div>
        </div>
    );
};

const DocsLanding = () => {
    return (
        <div>
            <Subtitle />
            <ProductList />
        </div>
    );
};




    // <div style={{ padding: '20px', backgroundColor: '#0A0F14', color: '#fff' }}>
    //   <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
    //     Welcome to Jupiter Developer Documentation
    //   </h1>
    //   <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
    //     Tag line
    //   </p>
    //   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
    //     <input
    //       type="text"
    //       placeholder="Quick search for anything"
    //       style={{
    //         padding: '10px',
    //         borderRadius: '5px',
    //         border: 'none',
    //         width: '90%', // Full width on mobile
    //         maxWidth: '400px', // Max width for larger screens
    //         marginBottom: '10px'
    //       }}
    //     />
    //     <button style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: '#fff', width: '90%', maxWidth: '100px' }}>
    //       ⌘K
    //     </button>
    //   </div>
    //   <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
    //     <div style={{ backgroundColor: '#AAEB42', color: '#000', padding: '20px', borderRadius: '10px', width: '90%', maxWidth: '300px', marginBottom: '20px' }}>
    //       <h3>Swap API</h3>
    //       <p>Utilize to access best routing and pricing of Solana's deep liquidity and trade routes.</p>
    //       <button style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: '#fff', width: '100%' }}>
    //         Get started
    //       </button>
    //     </div>
    //     <div style={{ backgroundColor: '#0BA5EC',  color: '#000', padding: '20px', borderRadius: '10px', width: '90%', maxWidth: '300px', marginBottom: '20px' }}>
    //       <h3>Perp API</h3>
    //       <p>An all-in-one customer service platform that helps you balance.</p>
    //       <button style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: '#fff', width: '100%' }}>
    //         Get started
    //       </button>
    //     </div>
    //     <div style={{ backgroundColor: '#6938EF',  color: '#000', padding: '20px', borderRadius: '10px', width: '90%', maxWidth: '300px' }}>
    //       <h3>Discover</h3>
    //       <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
    //       <button style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: '#fff', width: '100%' }}>
    //         Get started
    //       </button>
    //     </div>
    //   </div>
    // </div>


export default DocsLanding;