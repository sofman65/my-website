import styles from "../styles/styles";

const GbH_Logo = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] cursor-pointer`}>
        <img
            src="/assets/GbH_Logo.jpg"
            alt="GbH Logo"
            className="w-[100%] h-[100%] object-contain rounded-full"
        />
    </div>
);

export default GbH_Logo
