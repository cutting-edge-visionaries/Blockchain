from hashlib import sha256
import time

class block():
	def __init__(self, timestamp, data, previousHash = ''):
		self.timestamp = timestamp
		self.data = data
		self.previousHash = previousHash
		self.hash = self.calculateHash()

	def calculateHash(self):
		#todo
		#return hash--------------------

class blockchain():

	def __init__(self):
		self.chain = [self.createGenesis()]

	def createGenesis(self):
		return block(time.ctime(), "Genesis Block", "00000")

	def mineBlock(self, data):
		# current Time = time.ctime()
		# creating a block -----------------------

		#todo


		self.chain.append(node)

	def printBlockchain(self):
		for i in range(len(self.chain)):
			print("\n-----Block ", i ,"---------\n timestamp = "\
				       , self.chain[i].timestamp,"\n data = ", \
				       		self.chain[i].data, "\n previousHash = ",\
				       		 self.chain[i].previousHash,"\n hash = ", \
				       		    self.chain[i].hash)


cev = blockchain()

#block-1
data = input()
cev.mineBlock(data)

#block-2
data = input()
cev.mineBlock(data)


cev.printBlockchain()