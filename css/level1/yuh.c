#include<Stdio.h>
void swap(int x,int y){
    int temp=x;
    x=y;
    y=temp;
    printf("inside the fn  x=%d, y=%d \n",x,y);
}
int main(){

    int a=10,b=20;
    swap(a,b);
    printf("outside function , a=%d , b=%d\n",a,b);




    return 0;
}