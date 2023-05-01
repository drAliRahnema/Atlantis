import { useAppStore } from "~~/stores/app";

export default defineNuxtPlugin(() => {
  const appState = useAppStore();
  return {
    provide: {
      downloadAsJsonFile: (content: any, fileName: string, contentType: any) => {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    },
      timestampToDate: (unix_timestamp: number): string => {
        if (unix_timestamp) {
          // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.
          var date = new Date(unix_timestamp * 1000);
          // Hours part from the timestamp
          var hours = date.getHours();
          // Minutes part from the timestamp
          var minutes = "0" + date.getMinutes();
          // Seconds part from the timestamp
          var seconds = "0" + date.getSeconds();

          // Will display time in 10:30:23 format
          var formattedTime =
            hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

          // console.log(formattedTime);
          return formattedTime;
        } else {
          return "";
        }
      },
      getUnknownImgUrl: (): string => {
        return `/icons/.../Unknown.png`;
      },
      getCurrentTime: () =>{
        return new Date().toLocaleString() 
      },
      /**
       * Dynamically sets a deeply nested value in an object.
       * Optionally "bores" a path to it if its undefined.
       * @function
       * @param {!object} obj  - The object which contains the value you want to change/set.
       * @param {!array} path  - The array representation of path to the value you want to change/set.
       * @param {!mixed} value - The value you want to set it to.
       * @param {boolean} setrecursively - If true, will set value of non-existing path as well.
       */
      setDeep: (
        obj: any,
        path: string[],
        value: any,
        setrecursively: boolean = false
      ) => {
        path.reduce(
          (a: { [x: string]: any }, b: string | number, level: any) => {
            if (
              setrecursively &&
              typeof a[b] === "undefined" &&
              level !== path.length
            ) {
              a[b] = {};
              return a[b];
            }

            if (level === path.length) {
              a[b] = value;
              return value;
            }
            return a[b];
          },
          obj
        );
      },
      /**
       * getDeep
       * @param obj
       * @param selectors
       */
      getDeep: (obj: any, ...selectors: string[]) => {
        [...selectors].map((s) =>
          s
            .replace(/\[([^\[\]]*)\]/g, ".$1.")
            .split(".")
            .filter((t: string) => t !== "")
            .reduce(
              (prev: { [x: string]: any }, cur: string | number) =>
                prev && prev[cur],
              obj
            )
        );
      },
    },
  };
});
