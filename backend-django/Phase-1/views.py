from .serializers import CustomerSerializer

from home.models import Customer

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView



#Function Based Views.................................................................
# @api_view(['GET','POST'])
# def customer(request):
#     if request.method == 'GET':
#         data = Customer.objects.all()
#         serializer = CustomerSerializer(data, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
#     elif request.method == 'POST':
#         serializer = CustomerSerializer(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET','PUT','DELETE'])
# def get_customer(request, pk):
#     try:
#         data_point = Customer.objects.get(pk=pk)
#     except:
#         return Response(status=status.HTTP_400_BAD_REQUEST)
    
#     if request.method == 'GET':
#         serializer = CustomerSerializer(data_point)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = CustomerSerializer(data_point, data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         data_point.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)




#Class Based Views.................................................................
class customer(APIView):
    def get(self, request):
        data = Customer.objects.all()
        serializer = CustomerSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = CustomerSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

