 function randomsort(a,b){
              return Math.random() > 0.5 ? -1 : 1;
          }
          var arr=['villager','villager','villager','werewolf','werewolf','werewolf','witch','prophet','guard'];
          arr.sort(randomsort);
          
		  console.log(arr)
		  localStorage.setItem('aarr',arr)