/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 *
 *
 * =======================
 * l1=[1,2,4] ; 1->2->4
 * l2=[1,3,4] ; 1->3->4
 * mergeList=[1,1,2,3,4,4]
 */

function ListNode(val, next) {
  this.val = val == undefined ? 0 : val;
  this.next = next == undefined ? null : next;
}

function printList(node) {
  while (node != null) {
    console.log(node.val + " ");
    node = node.next;
  }
}

const mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }
  let currentHead;
  if (l1.val < l2.val) {
    currentHead = l1;
    l1 = l1.next;
  } else {
    currentHead = l2;
    l2 = l2.next;
  }

  let resultListHead = currentHead;

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      currentHead.next = l1;
      l1 = l1.next;
    } else {
      currentHead.next = l2;
      l2 = l2.next;
    }

    currentHead = currentHead.next;
  }

  if (l1) {
    currentHead.next = l1;
  } else {
    currentHead.next = l2;
  }

  return resultListHead;
};

//recursive way

const mergeSortedLinkList = (l1, l2) => {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeSortedLinkList(l1.next, l2);

    return l1;
  } else {
    l2.next = mergeSortedLinkList(l1, l2.next);
    return l2;
  }
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const mergedList = mergeSortedLinkList(l1, l2);

console.log(mergedList);

printList(mergedList);
