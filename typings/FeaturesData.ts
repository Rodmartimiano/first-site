import FeatureItem from "./FeatureItem";

type FeaturesData = {
  mainTitle: string;
  featuresItems: FeatureItem[];
};

export default FeaturesData;

const featuresMock: FeaturesData = {
  mainTitle: "",
  featuresItems: [],
};

export { featuresMock };
