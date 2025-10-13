from .serializers import CustomerSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from home.models import Customer
from rest_framework import status


#Function Based Views.................................................................
@api_view(['GET','POST'])
def customer(request):
    if request.method == 'GET':
        data = Customer.objects.all()
        serializer = CustomerSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        serializer = CustomerSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)