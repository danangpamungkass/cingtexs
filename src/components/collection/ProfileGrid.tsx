import ProfileCard from './ProfileCard';

const profiles = [
    {
        imageUrl: '/asset/card/tshirt.webp',
        name: 'T-Shirt',
        description: 'on Instagram',
    },

    {
        imageUrl: '/asset/card/almet.jpg',
        name: 'Almamater',
        description: 'on Instagram.',
    },

    {
        imageUrl: '/asset/card/trackpants.png',
        name: 'Trackpants',
        description: 'on Instagram',
    },

    {
        imageUrl: '/asset/card/workJacket.jpg',
        name: 'Work Jacket',
        description: 'on Instagram',
    },

];

const ProfileGrid = () => {
    return (
    <section id="collection" className='pt-20'>
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex items-center justify-center my-8">
                <div className="flex items-center w-full max-w-md">
                    <div className="flex-grow h-px bg-gray-500" />
                    <span className="mx-3 lg:mx-5 text-base lg:text-3xl font-semibold text-black">Collection</span>
                    <div className="flex-grow h-px bg-gray-500" />
                </div>
            </div>


            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,2fr))]">
                {profiles.map((profile, idx) => (
                    <ProfileCard
                        key={idx}
                        imageUrl={profile.imageUrl}
                        name={profile.name}
                        description={profile.description}
                    />
                ))}
            </div>
        </div>
    </section>
    );
};

export default ProfileGrid;
