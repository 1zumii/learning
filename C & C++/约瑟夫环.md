### 题目

有n个人围成一圈，顺序排号。从第一个人开始报数（1到3报数），凡报到3的人退出圈子，问最后留下来的是原来第几号的那位。

### 解题

```c
#include<stdio.h>
#define N 7 //N为总人数

/*报数，并返回下一个报数的人*/
int order(int *p, int end, int sayNum);
/*循环报数，返回下一次报的数*/
int nextNum(int i);

/*
* p储存数组a的首地址，用于order访问数组a
* end存放每轮最后一个人报的数
*/
int main(void){
	int a[N+1];				//下标和号码对应
	int num = N;			//圈里剩余人数
	int i, last, re = 1;	//end的实参
	int sayNum = 1; 
	a[0] = 0;
	//用非零值初始化数组a
	for(i = 0; i <= N; i++){
		a[i] = 1;
	} 
	//游戏开始
	while(num!=1){
		re = order(a,re,sayNum);	//一个人报数，并返回下一个报数的人
		if(sayNum == 3)
			num--;
		sayNum = nextNum(sayNum);
		printf("\n");
		for(i = 1; i <= N; i++){
			printf("%d ",a[i]);
		}
	} 
	for(i = 1; i <= N; i++){
		if(a[i] != 0){
			last = i;
		}
	}
	printf("\nThe number of the last is %d\n",last);
	return 0;
}

int nextNum(int i){
	if(i == 3){
		return 1;
	}else {
		return i+1;
	}
}

/*p[end]报数，并返回下一个报数的人*/
int order(int *p, int end, int sayNum){
	if(sayNum == 3)
		p[end] = 0;		//报到3的人，设置为0
		
	//跳到下一个能报数的人
	do{
		end++;
		if(end>N){
			end = 1;
		}
	}while(p[end] == 0);
	
	return end; 
} 
```

