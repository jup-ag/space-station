import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
    if (!ExecutionEnvironment.canUseDOM) {
      return null;
    }

    return {
        onRouteUpdate({location, previousLocation}) {
            const onRouteUpdate = { onRouteUpdate: { curr: location, prev: previousLocation } };
            console.log(onRouteUpdate);
        },
        onRouteDidUpdate({location, previousLocation}) {
            const onRouteDidUpdate = { onRouteDidUpdate: { curr: location, prev: previousLocation } };
            console.log(onRouteDidUpdate);
        },
    }
})();