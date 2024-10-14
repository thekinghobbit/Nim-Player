
<!--
var z,sp,next_to_that
      a = new int_array(4)
      image=new Array()
      image[1]=new Image()
      image[1].src="empty1.gif"
      image[2]=new Image()
      image[2].src="matcho1.gif"

      function one_way(row) {
        a[row]--
        document.images[(row-1)*(row-1)+a[row]].src=image[1].src
      }

      function player_draught(row) {
        if (a[1]+a[2]+a[3]+a[4]!=0) {
          if ((next_to_that==5 || next_to_that==6) && a[row]!=0) next_to_that=row
          if (next_to_that==row && a[row]!=0) one_way(row)
          if (a[1]+a[2]+a[3]+a[4]==0)
            alert("Sorry... I won!");
        }
      }

      function m_way(row) {
        while (a[row]<sp) {
          sp--
          document.images[(row-1)*(row-1)+sp].src=image[1].src
          for (var j=1; j<1500; j++){}
        }
      }

      var im=134456
      var ia=8121
      var ic=28411
      var iran

      function randomize()
      {
        var now  =new Date()
        iran=now.getSeconds()
      }

      function chance(imax)
      {
        iran=(iran*ia+ic) % im
        return(Math.floor(iran/im*imax))
      }

      function winning_position() {
        var q,r,s
        q=(a[1] ^ a[2] ^ a[3] ^ a[4])==0
        r=(a[1] | a[2] | a[3] | a[4])==1
        s=q ^ r
        return(s)
      }

      function computer_draught() {
        if (a[1]+a[2]+a[3]+a[4]!=0) {
          if (next_to_that!=5 && a[1]+a[2]+a[3]+a[4]!=0) {
            next_to_that=5
            z=chance(4)+1
            if (winning_position()) {
              while (a[z]==0) z=(z % 4)+1
              one_way(z)
            }
            else {
              while (!winning_position()) {
                z=(z % 4)+1
                while (a[z]==0) z=(z % 4)+1
                sp=a[z]
                while (!winning_position() && a[z]!=0) a[z]--
                if (!winning_position()) a[z]=sp
              }
              m_way(z)
            }
          }
          for (var j=1; j<1500; j++){}
          if (a[1]+a[2]+a[3]+a[4]==0)
            alert("You WON!!! Congratulations...");

        }
      }

      function int_array(length) { this.length=length }

      function new_game() {
        a[1]=1;a[2]=3;a[3]=5;a[4]=7
        next_to_that=6
        for (var i=0; i<=15; i++) document.images[i].src=image[2].src
        document.distribution.value="  "
      }

      function draw(nr) {
        var str=""
        str +=""
        alert(str)
        if (document.images[nr].src==image[2].src) {
          document.images[nr].src=image[2].src
        }
        else {
          document.images[nr].src=image[1].src
        }
      }

//-->
