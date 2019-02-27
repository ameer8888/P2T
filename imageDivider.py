

def divider(pixMat):
    return ""


def rowDivider(pixMat):
    is_row_started = False
    rows = []
    rowbeginning = None
    for i in range(len(pixMat)):
        for j in range(len(pixMat)) and is_row_started is False:
            if pixMat[i][j] == 0:
                is_row_started = True
                rowbeginning = i

        if is_row_started is False and c is not None:
            rows.append({begin: rowbeginning, end: i-1})
            rowbeginning = None
        is_row_started = False

    return rows

def letterDivder(pixMat,startRow,endRow):
    return ""


