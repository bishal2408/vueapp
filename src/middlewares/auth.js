import { useLoginStore } from "@/store"


export default function auth({ next, router }) {
  console.log(useLoginStore().checkLogin);
    if (useLoginStore().checkLogin) {
        return next({
          name: 'loginView'
      })
    }
  
    return next();
  }