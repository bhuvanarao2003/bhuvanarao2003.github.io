var names=new Array();
names[0]="oggy";
names[1]="tom";
names[2]="jerry";
names[3]="shinchan";
names[4]="doremon";
names[5]="mr.bean";
names[6]="pinkpanther";
names[7]="pockemon";
names[8]="hidy";
names[9]="bheem";


for (var i = 0; i < names.length; i++) {
 if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
 }
 else{
  console.log("Hello "+ names[i])
 }
}
