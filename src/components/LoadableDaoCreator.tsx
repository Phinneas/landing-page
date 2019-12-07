import Loadable from "@loadable/component";

const LoadableDaoCreator = Loadable(() => import("@dorgtech/daocreator-ui-v1"));

export default LoadableDaoCreator;
