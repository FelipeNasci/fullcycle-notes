package main
import  "testing"
	

func TestSum(test *testing.T) {
	total := Sum(15,15)

	if total != 30 {
		test.Errorf("Invalid result %d", total)
	}
}