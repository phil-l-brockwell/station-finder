var start = 1;
var goal = 7;

var open = [start];
var closed = [];

var stations =
{
  1: { name: 'Bond Street', children: [6, 3]             },
  2: { name: 'Regents Park', children: [3]               },
  3: { name: 'Oxford Circus', children: [6, 5, 4, 2, 1]  },
  4: { name: 'Tottenham Court Road', children: [7, 3]    },
  5: { name: 'Piccadilly Circus', children: [7, 6, 3]    },
  6: { name: 'Green Park', children: [5, 3, 1]           },
  7: { name: 'Leicester Square', children: [5, 4]        }
};

console.log('Starting at ' + (stations[start].name) + ' and looking for ' + (stations[goal].name));

while (open != [])

{
  console.log('');
  console.log('Open List:');
  for (var i = 0; i < open.length; i++)
  {
    console.log(stations[open[i]].name);
  }
  console.log('');
  var x = open.shift();
  console.log('Check first station on the Open List:');
  console.log(stations[x].name);
  console.log('');
  console.log('Is ' + stations[x].name + ' the target?');
  console.log('');

  if (x == goal)
  {
    console.log('Yes');
    console.log('');
    console.log('Success!');
    return 0;
  }
  else
  {
    console.log('No.')
    console.log('');
    console.log('So, find its children.');
    console.log('');
    var children = stations[x].children;
    console.log('Children:');
    for (var i = 0; i < children.length; i++)
    {
      console.log(stations[children[i]].name);      
    }
    console.log('');
    
    console.log('Add them to the Open List; unless they are already on the Open List, or the Closed List.');
    console.log('');
    console.log('And add ' + stations[x].name + ' to the closed list.');
    closed.push(x);
    console.log('');
    console.log('Closed List:');
    for (var i = 0; i < closed.length; i++)
    {
      console.log(stations[closed[i]].name)
    }
    for (var i = 0; i < children.length; i++)
    {
      if (open.indexOf(children[i]) != -1
      | closed.indexOf(children[i]) != -1)
      {
        children.splice(i, 1);
        i--;
      }
      else
      {
        open.unshift(children[i]);
      }
    }
  }
}

console.log('Failure!');
return 1;