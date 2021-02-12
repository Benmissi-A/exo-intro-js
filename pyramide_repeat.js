
let a = '*';
let b = ' ';
for(let i=0 ;i<8; ++i){
  console.log(a.repeat(i+1));
};

// puor la pyramide 2

for(let i=0 ;i<8; ++i){
  console.log(a.repeat(i+1)+b.repeat(16-((i+1)*2))+a.repeat(i+1));
};